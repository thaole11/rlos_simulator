import { Controller, Post, Get, Param, Patch, Delete, Body } from '@nestjs/common';
import { LeadDetailsService } from './lead-details.service';
import { CreateLeadDetailsDto } from './dto/create-lead-details.dto';
import { UpdateLeadDetailsDto } from './dto/update-lead-details.dto';
import { FilterLeadDetailsDto } from './dto/filter-lead-details.dto';

@Controller('lead-details')
export class LeadDetailsController {
  constructor(private readonly leadDetailsService: LeadDetailsService) {}

  @Post()
  create(@Body() createLeadDetailsDto: CreateLeadDetailsDto) {
    return this.leadDetailsService.create(createLeadDetailsDto);
  }

  @Get()
  findAll() {
    return this.leadDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leadDetailsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeadDetailsDto: UpdateLeadDetailsDto) {
    return this.leadDetailsService.update(id, updateLeadDetailsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadDetailsService.remove(id);
  }

  @Post('filter')
  filter(@Body() filterDto: FilterLeadDetailsDto) {
    return this.leadDetailsService.filter(filterDto);
  }
}
