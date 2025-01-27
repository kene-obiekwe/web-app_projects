import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ClinicalRecord } from "src/patient-registration/clinical_records/entities/clinical_record.entity";

@Entity()
export class PatientBiodata {
  @PrimaryGeneratedColumn()
  Clinic_ID: number;

  @Column()
  First_Name: string;

  @Column()
  Surname: string;

  @Column({ nullable: true })
  Middle_Name: string;

  @Column()
  Date_of_Birth: Date;

  @Column()
  Home_Address: string;

  @Column()
  Date_of_Registration: Date;

  @Column()
  Matriculation_Number: string;

  @OneToMany(() => ClinicalRecord, clinical_record => clinical_record.patient_biodata)
  clinical_record: ClinicalRecord[];
}
