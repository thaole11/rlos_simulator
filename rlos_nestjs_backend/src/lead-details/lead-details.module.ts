import { Module } from '@nestjs/common';
import { LeadDetailsService } from './lead-details.service';
import { LeadDetailsController } from './lead-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadDetails } from '../entities/lead-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LeadDetails])],
  controllers: [LeadDetailsController],
  providers: [LeadDetailsService],
})
export class LeadDetailsModule {}
