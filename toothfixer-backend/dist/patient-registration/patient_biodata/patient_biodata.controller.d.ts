import { PatientBiodataService } from './patient_biodata.service';
import { CreatePatientBiodataDto } from './dto/create-patient_biodata.dto';
import { UpdatePatientBiodataDto } from './dto/update-patient_biodata.dto';
export declare class PatientBiodataController {
    private readonly patientBiodataService;
    constructor(patientBiodataService: PatientBiodataService);
    create(createPatientBiodataDto: CreatePatientBiodataDto): Promise<import("./entities/patient_biodata.entity").PatientBiodata>;
    findAll(): Promise<import("./entities/patient_biodata.entity").PatientBiodata[]>;
    findOne(id: string): Promise<import("./entities/patient_biodata.entity").PatientBiodata>;
    update(id: string, updatePatientBiodataDto: UpdatePatientBiodataDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
