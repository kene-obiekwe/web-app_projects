import { Repository } from 'typeorm';
import { CreateClinicalRecordDto } from './dto/create-clinical_record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical_record.dto';
import { ClinicalRecord } from './entities/clinical_record.entity';
export declare class ClinicalRecordService {
    private ClinicalRepository;
    constructor(ClinicalRepository: Repository<ClinicalRecord>);
    create(createClinicalRecordDto: CreateClinicalRecordDto): Promise<ClinicalRecord>;
    findAll(): Promise<ClinicalRecord[]>;
    findOne(Clinic_ID: number): Promise<ClinicalRecord>;
    update(Clinic_ID: number, updateClinicalRecordDto: UpdateClinicalRecordDto): Promise<import("typeorm").UpdateResult>;
    remove(Clinic_ID: number): Promise<import("typeorm").DeleteResult>;
}
