import { Test, TestingModule } from '@nestjs/testing';
import { ClinicalRecordService } from './clinical_records.service';

describe('ClinicalRecordsService', () => {
  let service: ClinicalRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClinicalRecordService],
    }).compile();

    service = module.get<ClinicalRecordService>(ClinicalRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
