import { PartialType } from '@nestjs/mapped-types';
import { CreateLeadDetailsDto } from './create-lead-details.dto';

export class UpdateLeadDetailsDto extends PartialType(CreateLeadDetailsDto) {   
}
