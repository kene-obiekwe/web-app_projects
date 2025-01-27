import { PatientBiodata } from "src/patient-registration/patient_biodata/entities/patient_biodata.entity";
export declare class ClinicalRecord {
    Clinic_ID: number;
    Clinic_Date: Date;
    Nature_of_Ailment: string;
    Medicine_Prescribed: string;
    Procedure_Undertaken: string;
    Date_of_next_Appointment: Date;
    patient_biodata: PatientBiodata;
}
