import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { PatientBiodataService } from './patient_biodata.service';
import { CreatePatientBiodataDto } from './dto/create-patient_biodata.dto';
import { UpdatePatientBiodataDto } from './dto/update-patient_biodata.dto';

@Controller('patient-biodata')
export class PatientBiodataController {
  constructor(private readonly patientBiodataService: PatientBiodataService) {}

  @Post()
  create(@Body() createPatientBiodataDto: CreatePatientBiodataDto) {
    return this.patientBiodataService.create(createPatientBiodataDto);
  }

  @Get()
  findAll() {
    return this.patientBiodataService.findAll();
  }

  @Get(':Clinic_ID')
  findOne(@Param('Clinic_ID') id: string) {
    return this.patientBiodataService.findOne(+id);
  }

  @Patch(':Clinic_ID')
  update(@Param('Clinic_ID') id: string, @Body() updatePatientBiodataDto: UpdatePatientBiodataDto) {
    return this.patientBiodataService.update(+id, updatePatientBiodataDto);
  }

  @Delete(':Clinic_ID')
  remove(@Param('Clinic_ID') id: string) {
    return this.patientBiodataService.remove(+id);
  }
}
