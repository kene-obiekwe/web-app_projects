import { ClinicalRecordService } from './clinical_records.service';
import { CreateClinicalRecordDto } from './dto/create-clinical_record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical_record.dto';
export declare class ClinicalRecordController {
    private readonly clinicalRecordService;
    constructor(clinicalRecordService: ClinicalRecordService);
    create(createClinicalRecordDto: CreateClinicalRecordDto): Promise<import("./entities/clinical_record.entity").ClinicalRecord>;
    findAll(): Promise<import("./entities/clinical_record.entity").ClinicalRecord[]>;
    findOne(id: string): Promise<import("./entities/clinical_record.entity").ClinicalRecord>;
    update(id: string, updateClinicalRecordDto: UpdateClinicalRecordDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
