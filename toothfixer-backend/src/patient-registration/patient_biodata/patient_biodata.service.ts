import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientBiodataDto } from './dto/create-patient_biodata.dto';
import { UpdatePatientBiodataDto } from './dto/update-patient_biodata.dto';
import { PatientBiodata } from './entities/patient_biodata.entity';


@Injectable()
export class PatientBiodataService {
  constructor(
    @InjectRepository(PatientBiodata)
    private PatientRepository: Repository<PatientBiodata>
    ){}
    async create(createPatientBiodataDto: CreatePatientBiodataDto) {
      const newPatient: PatientBiodata = this.PatientRepository.create(createPatientBiodataDto)
      return this.PatientRepository.save(newPatient);
      //return 'This action adds a new Patient';
      }
      async findAll() {
      //return `This action returns all Patients`;
      return await this.PatientRepository.find();
      }
    async findOne(Clinic_ID: number) {
        //return `This action returns a #${id} Patient`;
        return await this.PatientRepository.findOne({
        where: {
        Clinic_ID // same as id:id
        }
        });
        }
    async update(Clinic_ID: number, updatePatientBiodataDto:
        UpdatePatientBiodataDto) {
        //return `This action updates a #${id} user`;
        return await this.PatientRepository.update(Clinic_ID,
        updatePatientBiodataDto);
      }
    async remove(Clinic_ID: number) {
        //return `This action removes a #${id} user`;
        return await this.PatientRepository.delete(Clinic_ID);
      }
}