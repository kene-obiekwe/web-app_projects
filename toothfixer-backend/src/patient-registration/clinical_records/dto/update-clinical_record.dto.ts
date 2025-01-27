import { PartialType } from '@nestjs/mapped-types';
import { CreateClinicalRecordDto } from './create-clinical_record.dto';

export class UpdateClinicalRecordDto extends PartialType(CreateClinicalRecordDto) {}
