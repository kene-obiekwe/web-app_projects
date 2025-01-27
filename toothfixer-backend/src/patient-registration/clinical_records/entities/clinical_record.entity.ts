import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PatientBiodata } from "src/patient-registration/patient_biodata/entities/patient_biodata.entity";

@Entity()
export class ClinicalRecord {
  @PrimaryGeneratedColumn()
  Clinic_ID: number;

  @Column()
  Clinic_Date: Date;

  @Column()
  Nature_of_Ailment: string;

  @Column()
  Medicine_Prescribed: string;

  @Column()
  Procedure_Undertaken: string;

  @Column()
  Date_of_next_Appointment: Date;

  @ManyToOne(() => PatientBiodata, patient_biodata => patient_biodata.clinical_record)
  patient_biodata: PatientBiodata;
}
