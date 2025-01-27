import { Test, TestingModule } from '@nestjs/testing';
import { PatientBiodataService } from './patient_biodata.service';

describe('PatientBiodataService', () => {
  let service: PatientBiodataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientBiodataService],
    }).compile();

    service = module.get<PatientBiodataService>(PatientBiodataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
