import { Test, TestingModule } from '@nestjs/testing';
import { ClinicalRecordController } from './clinical_records.controller';
import { ClinicalRecordService } from './clinical_records.service';

describe('ClinicalRecordsController', () => {
  let controller: ClinicalRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicalRecordController],
      providers: [ClinicalRecordService],
    }).compile();

    controller = module.get<ClinicalRecordController>(ClinicalRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
