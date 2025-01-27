import { ClinicalRecord } from "src/patient-registration/clinical_records/entities/clinical_record.entity";
export declare class PatientBiodata {
    Clinic_ID: number;
    First_Name: string;
    Surname: string;
    Middle_Name: string;
    Date_of_Birth: Date;
    Home_Address: string;
    Date_of_Registration: Date;
    Matriculation_Number: string;
    clinical_record: ClinicalRecord[];
}
