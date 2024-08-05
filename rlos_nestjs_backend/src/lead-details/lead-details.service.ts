import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeadDetails } from '../entities/lead-details.entity';
import { CreateLeadDetailsDto } from './dto/create-lead-details.dto';
import { UpdateLeadDetailsDto } from './dto/update-lead-details.dto';
import { LeadDetailsNotFoundException } from '../utils/response/lead-details/lead-details-not-found.exception';
import { FilterLeadDetailsDto } from './dto/filter-lead-details.dto';

@Injectable()
export class LeadDetailsService {
  constructor(
    @InjectRepository(LeadDetails)
    private leadDetailsRepository: Repository<LeadDetails>
  ) {}

  create(createLeadDetailsDto: CreateLeadDetailsDto): Promise<LeadDetails> {
    const leadDetails = this.leadDetailsRepository.create(createLeadDetailsDto);
    return this.leadDetailsRepository.save(leadDetails);
  }

  findAll(): Promise<LeadDetails[]> {
    return this.leadDetailsRepository.find();
  }

  async findOne(id: string): Promise<LeadDetails> {
    const leadDetails = await this.leadDetailsRepository.findOne({
      where: {
        id: id
      }
    });
    if (!leadDetails) {
      throw new LeadDetailsNotFoundException(id);
    }
    return leadDetails;
  }

  async update(id: string, updateLeadDetailsDto: UpdateLeadDetailsDto): Promise<LeadDetails> {
    await this.leadDetailsRepository.update(id, updateLeadDetailsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const result = await this.leadDetailsRepository.delete(id);
    if (result.affected === 0) {
      throw new LeadDetailsNotFoundException(id);
    }
  }

  async filter(filterDto: FilterLeadDetailsDto): Promise<LeadDetails[]> {
    // Filter the lead details based on the filterDto fields
    const query = this.leadDetailsRepository.createQueryBuilder('leadDetails');

    console.log('filterDto', filterDto);

    Object.keys(filterDto).forEach((key) => {
      if (filterDto[key]) {
        query.andWhere(`leadDetails.${key} = :${key}`, { [key]: filterDto[key] });
      }
    });

    console.log('query', query.getQueryAndParameters());

    return query.getMany();
  }
}
