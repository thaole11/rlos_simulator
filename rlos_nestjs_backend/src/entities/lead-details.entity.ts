import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lead_details') // Ensure this matches your table name
export class LeadDetails {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  existingCustomerType?: string;

  @Column({ nullable: true })
  neocif1?: string;

  @Column({ nullable: true })
  neocif2?: string;

  @Column({ nullable: true })
  lan?: string;

  @Column({ nullable: true })
  ctdCode?: string;

  @Column({ nullable: true })
  customerName?: string;

  @Column({ nullable: true })
  dob?: string;

  @Column({ nullable: true })
  mobileCountry?: string;

  @Column({ nullable: true })
  mobileInitials?: string;

  @Column({ nullable: true })
  mobileNumber?: string;

  @Column({ nullable: true })
  idType?: string;

  @Column({ nullable: true })
  landlineCountry?: string;

  @Column({ nullable: true })
  landlineInitials?: string;

  @Column({ nullable: true })
  landlineSTD?: string;

  @Column({ nullable: true })
  landlineNumber?: string;

  @Column({ nullable: true })
  landlineEXTN?: string;

  @Column({ nullable: true })
  idNumber?: string;

  @Column({ nullable: true })
  customerType?: string;

  @Column({ nullable: true })
  motherName?: string;

  @Column({ nullable: true })
  callDataMethod?: string;
}