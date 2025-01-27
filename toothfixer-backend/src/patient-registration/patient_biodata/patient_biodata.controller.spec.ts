import { Test, TestingModule } from '@nestjs/testing';
import { PatientBiodataController } from './patient_biodata.controller';
import { PatientBiodataService } from './patient_biodata.service';

describe('PatientBiodataController', () => {
  let controller: PatientBiodataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientBiodataController],
      providers: [PatientBiodataService],
    }).compile();

    controller = module.get<PatientBiodataController>(PatientBiodataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
