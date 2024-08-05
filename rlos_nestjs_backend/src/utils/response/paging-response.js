"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomResponsePaginatedVoid = exports.PagingResponseVoid = exports.CustomResponsePaginatedString = exports.PagingResponseString = exports.CustomResponsePaginatedList = exports.CustomResponsePaginated = exports.PagingResponseList = exports.PagingResponse = void 0;
var paging_1 = require("./paging");
var swagger_1 = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var PagingResponse = /** @class */ (function () {
    function PagingResponse(data, event, paging) {
        this.data = data;
        this.event = event;
        this.paging = paging;
    }
    return PagingResponse;
}());
exports.PagingResponse = PagingResponse;
var PagingResponseList = /** @class */ (function (_super) {
    __extends(PagingResponseList, _super);
    function PagingResponseList(data, event, paging) {
        return _super.call(this, data, event, paging) || this;
    }
    return PagingResponseList;
}(PagingResponse));
exports.PagingResponseList = PagingResponseList;
var CustomResponsePaginated = function (_a) {
    var status = _a.status, description = _a.description, dataDto = _a.dataDto;
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(PagingResponse, dataDto, paging_1.Paging), (0, swagger_1.ApiResponse)({
        status: status,
        description: description,
        schema: {
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)(PagingResponse) },
                {
                    properties: {
                        event: { type: 'string' },
                        data: { $ref: (0, swagger_1.getSchemaPath)(dataDto) }
                    }
                }
            ]
        }
    }));
};
exports.CustomResponsePaginated = CustomResponsePaginated;
var CustomResponsePaginatedList = function (_a) {
    var status = _a.status, description = _a.description, dataDto = _a.dataDto;
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(PagingResponseList, dataDto, paging_1.Paging), (0, swagger_1.ApiResponse)({
        status: status,
        description: description,
        schema: {
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)(PagingResponseList) },
                {
                    properties: {
                        event: { type: 'string' },
                        data: {
                            type: 'array',
                            items: { $ref: (0, swagger_1.getSchemaPath)(dataDto) }
                        }
                    }
                }
            ]
        }
    }));
};
exports.CustomResponsePaginatedList = CustomResponsePaginatedList;
// Define another custom paging response for string data
var PagingResponseString = /** @class */ (function (_super) {
    __extends(PagingResponseString, _super);
    function PagingResponseString(data, event, paging) {
        return _super.call(this, data, event, paging) || this;
    }
    return PagingResponseString;
}(PagingResponse));
exports.PagingResponseString = PagingResponseString;
var CustomResponsePaginatedString = function (_a) {
    var status = _a.status, description = _a.description;
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(PagingResponseString, paging_1.Paging), (0, swagger_1.ApiResponse)({
        status: status,
        description: description,
        schema: {
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)(PagingResponseString) },
                {
                    properties: {
                        event: { type: 'string' },
                        data: { type: 'string' }
                    }
                }
            ]
        }
    }));
};
exports.CustomResponsePaginatedString = CustomResponsePaginatedString;
// Add for void data (data is null)
var PagingResponseVoid = /** @class */ (function (_super) {
    __extends(PagingResponseVoid, _super);
    function PagingResponseVoid(event, paging) {
        return _super.call(this, null, event, paging) || this;
    }
    return PagingResponseVoid;
}(PagingResponse));
exports.PagingResponseVoid = PagingResponseVoid;
var CustomResponsePaginatedVoid = function (_a) {
    var status = _a.status, description = _a.description;
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(PagingResponseVoid, paging_1.Paging), (0, swagger_1.ApiResponse)({
        status: status,
        description: description,
        schema: {
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)(PagingResponseVoid) },
                {
                    properties: {
                        event: { type: 'string' }
                    }
                }
            ]
        }
    }));
};
exports.CustomResponsePaginatedVoid = CustomResponsePaginatedVoid;
