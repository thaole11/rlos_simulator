import { IsNotEmpty, IsEmail, IsDateString } from 'class-validator';

export class CreateLeadDetailsDto {
  @IsNotEmpty()
  customerType: string;

  @IsNotEmpty()
  customerFullName: string;

  @IsDateString()
  dob: string;

  @IsNotEmpty()
  mobileCountry: string;

  @IsNotEmpty()
  mobileInitials: string;

  @IsNotEmpty()
  mobileNumber: string;

  @IsNotEmpty()
  landlineCountry: string;

  @IsNotEmpty()
  landlineInitials: string;

  @IsNotEmpty()
  landlineSTD: string;

  @IsNotEmpty()
  landlineNumber: string;

  @IsNotEmpty()
  landlineEXTN: string;

  @IsNotEmpty()
  NEOCIF: string;

  @IsNotEmpty()
  cifNumber: string;

  @IsNotEmpty()
  idNumber: string;

  @IsDateString()
  idIssueDate: string;

  @IsNotEmpty()
  idIssuePlace: string;

  @IsNotEmpty()
  address: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  image: Buffer;
}
