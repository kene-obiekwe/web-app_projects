import { Repository } from 'typeorm';
import { CreatePatientBiodataDto } from './dto/create-patient_biodata.dto';
import { UpdatePatientBiodataDto } from './dto/update-patient_biodata.dto';
import { PatientBiodata } from './entities/patient_biodata.entity';
export declare class PatientBiodataService {
    private PatientRepository;
    constructor(PatientRepository: Repository<PatientBiodata>);
    create(createPatientBiodataDto: CreatePatientBiodataDto): Promise<PatientBiodata>;
    findAll(): Promise<PatientBiodata[]>;
    findOne(Clinic_ID: number): Promise<PatientBiodata>;
    update(Clinic_ID: number, updatePatientBiodataDto: UpdatePatientBiodataDto): Promise<import("typeorm").UpdateResult>;
    remove(Clinic_ID: number): Promise<import("typeorm").DeleteResult>;
}
