import { Module } from '@nestjs/common';
import { PatientBiodataService } from './patient_biodata.service';
import { PatientBiodataController } from './patient_biodata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientBiodata } from './entities/patient_biodata.entity';
import { ClinicalRecordModule } from '../clinical_records/clinical_records.module'; // Import the ClinicalRecordsModule

@Module({
  imports: [TypeOrmModule.forFeature([PatientBiodata]), ClinicalRecordModule], // Add ClinicalRecordsModule to imports
  controllers: [PatientBiodataController],
  providers: [PatientBiodataService],
})
export class PatientBiodataModule {}
