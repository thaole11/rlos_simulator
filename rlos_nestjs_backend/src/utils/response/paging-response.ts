import { Paging } from './paging';
import { ApiExtraModels, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { applyDecorators, HttpStatus, Type } from '@nestjs/common';

export class PagingResponse<T> {
  data: T;
  event: string;
  paging: Paging;

  constructor(data: T, event?: string, paging?: Paging) {
    this.data = data;
    this.event = event;
    this.paging = paging;
  }
}

export class PagingResponseList<T> extends PagingResponse<T[]> {
  constructor(data: T[], event?: string, paging?: Paging) {
    super(data, event, paging);
  }
}

export const CustomResponsePaginated = <DataDto extends Type<unknown>>({
                                                                         status,
                                                                         description,
                                                                         dataDto
                                                                       }: {
  status: HttpStatus;
  description: string;
  dataDto: DataDto;
}) =>
  applyDecorators(
    ApiExtraModels(PagingResponse, dataDto, Paging),
    ApiResponse({
      status,
      description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(PagingResponse) },
          {
            properties: {
              event: { type: 'string' },
              data: { $ref: getSchemaPath(dataDto) }
            }
          }
        ]
      }
    })
  );

export const CustomResponsePaginatedList = <DataDto extends Type<unknown>>({
                                                                             status,
                                                                             description,
                                                                             dataDto
                                                                           }: {
  status: HttpStatus;
  description: string;
  dataDto: DataDto;
}) =>
  applyDecorators(
    ApiExtraModels(PagingResponseList, dataDto, Paging),
    ApiResponse({
      status,
      description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(PagingResponseList) },
          {
            properties: {
              event: { type: 'string' },
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) }
              }
            }
          }
        ]
      }
    })
  );

// Define another custom paging response for string data

export class PagingResponseString extends PagingResponse<string> {
  constructor(data: string, event?: string, paging?: Paging) {
    super(data, event, paging);
  }
}

export const CustomResponsePaginatedString = ({ status, description }: { status: HttpStatus; description: string }) =>
  applyDecorators(
    ApiExtraModels(PagingResponseString, Paging),
    ApiResponse({
      status,
      description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(PagingResponseString) },
          {
            properties: {
              event: { type: 'string' },
              data: { type: 'string' }
            }
          }
        ]
      }
    })
  );

// Add for void data (data is null)
export class PagingResponseVoid extends PagingResponse<null> {
  constructor(event?: string, paging?: Paging) {
    super(null, event, paging);
  }
}

export const CustomResponsePaginatedVoid = ({ status, description }: { status: HttpStatus; description: string }) =>
  applyDecorators(
    ApiExtraModels(PagingResponseVoid, Paging),
    ApiResponse({
      status,
      description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(PagingResponseVoid) },
          {
            properties: {
              event: { type: 'string' }
            }
          }
        ]
      }
    })
  );
