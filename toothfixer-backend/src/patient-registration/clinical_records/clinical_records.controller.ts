import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { ClinicalRecordService } from './clinical_records.service';
import { CreateClinicalRecordDto } from './dto/create-clinical_record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical_record.dto';

@Controller('clinical-records')
export class ClinicalRecordController {
  constructor(private readonly clinicalRecordService: ClinicalRecordService) {}

  @Post()
  create(@Body() createClinicalRecordDto: CreateClinicalRecordDto) {
    return this.clinicalRecordService.create(createClinicalRecordDto);
  }

  @Get()
  findAll() {
    return this.clinicalRecordService.findAll();
  }

  @Get(':Clinic_ID')
  findOne(@Param('Clinic_ID') id: string) {
    return this.clinicalRecordService.findOne(+id);
  }

  @Patch(':Clinic_ID')
  update(@Param('Clinic_ID') id: string, @Body() updateClinicalRecordDto: UpdateClinicalRecordDto) {
    return this.clinicalRecordService.update(+id, updateClinicalRecordDto);
  }

  @Delete(':Clinic_ID')
  remove(@Param('Clinic_ID') id: string) {
    return this.clinicalRecordService.remove(+id);
  }
}
