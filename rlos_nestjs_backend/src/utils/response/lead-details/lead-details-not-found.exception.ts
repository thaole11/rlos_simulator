import { NotFoundException } from '@nestjs/common';

export class LeadDetailsNotFoundException extends NotFoundException {
  constructor(id: string) {
    super({
      statusCode: 404,
      message: `Lead with ID ${id} not found`,
      error: 'Not Found',
    });
  }
}