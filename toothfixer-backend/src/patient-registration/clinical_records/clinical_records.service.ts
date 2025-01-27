import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClinicalRecordDto } from './dto/create-clinical_record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical_record.dto';
import { ClinicalRecord } from './entities/clinical_record.entity';


@Injectable()
export class ClinicalRecordService {
  constructor(
    @InjectRepository(ClinicalRecord)
    private ClinicalRepository: Repository<ClinicalRecord>
    ){}
    async create(createClinicalRecordDto: CreateClinicalRecordDto) {
      const newClinical: ClinicalRecord = this.ClinicalRepository.create(createClinicalRecordDto)
      return this.ClinicalRepository.save(newClinical);
      //return 'This action adds a new Clinical record';
      }
      async findAll() {
      //return `This action returns all Clinical records`;
      return await this.ClinicalRepository.find();
      }
    async findOne(Clinic_ID: number) {
        //return `This action returns a #${id} Clinical record`;
        return await this.ClinicalRepository.findOne({
        where: {
        Clinic_ID // same as id:id
        }
        });
        }
    async update(Clinic_ID: number, updateClinicalRecordDto:
        UpdateClinicalRecordDto) {
        //return `This action updates a #${id} user`;
        return await this.ClinicalRepository.update(Clinic_ID,
        updateClinicalRecordDto);
      }
    async remove(Clinic_ID: number) {
        //return `This action removes a #${id} user`;
        return await this.ClinicalRepository.delete(Clinic_ID);
      }
}