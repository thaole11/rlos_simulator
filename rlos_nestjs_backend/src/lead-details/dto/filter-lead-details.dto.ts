import { IsOptional, IsString, IsDateString } from 'class-validator';

export class FilterLeadDetailsDto {
  @IsOptional()
  @IsString()
  existingCustomerType?: string;

  @IsOptional()
  @IsString()
  neocif1?: string;

  @IsOptional()
  @IsString()
  neocif2?: string;

  @IsOptional()
  @IsString()
  lan?: string;

  @IsOptional()
  @IsString()
  ctdCode?: string;

  @IsOptional()
  @IsString()
  customerName?: string;

  @IsOptional()
  @IsDateString()
  dob?: string;

  @IsOptional()
  @IsString()
  mobileCountry?: string;

  @IsOptional()
  @IsString()
  mobileInitials?: string;

  @IsOptional()
  @IsString()
  mobileNumber?: string;

  @IsOptional()
  @IsString()
  idType?: string;

  @IsOptional()
  @IsString()
  landlineCountry?: string;

  @IsOptional()
  @IsString()
  landlineInitials?: string;

  @IsOptional()
  @IsString()
  landlineSTD?: string;

  @IsOptional()
  @IsString()
  landlineNumber?: string;

  @IsOptional()
  @IsString()
  landlineEXTN?: string;

  @IsOptional()
  @IsString()
  idNumber?: string;

  @IsOptional()
  @IsString()
  customerType?: string;

  @IsOptional()
  @IsString()
  motherName?: string;

  @IsOptional()
  @IsString()
  callDataMethod?: string;
}
