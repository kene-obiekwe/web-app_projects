import { Module } from '@nestjs/common';
import { ClinicalRecordService } from './clinical_records.service';
import { ClinicalRecordController } from './clinical_records.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicalRecord } from './entities/clinical_record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClinicalRecord])],
  controllers: [ClinicalRecordController],
  providers: [ClinicalRecordService],
  exports: [TypeOrmModule, ClinicalRecordService], // Export the necessary providers
})
export class ClinicalRecordModule {}
