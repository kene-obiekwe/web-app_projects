import { Module } from '@nestjs/common';
import { PatientBiodataModule } from './patient_biodata/patient_biodata.module';
import { ClinicalRecordModule } from './clinical_records/clinical_records.module';

@Module({
  imports: [PatientBiodataModule, ClinicalRecordModule]
})
export class PatientRegistrationModule {}
