import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientBiodataDto } from './create-patient_biodata.dto';
import { CreateClinicalRecordDto } from 'src/patient-registration/clinical_records/dto/create-clinical_record.dto';

export class UpdatePatientBiodataDto extends PartialType(CreatePatientBiodataDto) {

}
