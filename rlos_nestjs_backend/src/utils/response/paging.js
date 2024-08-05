"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paging = void 0;
// Paging class
var Paging = /** @class */ (function () {
    function Paging(page, limit, totalItems, totalPage) {
        this.page = page;
        this.limit = limit;
        this.totalItems = totalItems;
        this.totalPage = totalPage;
    }
    return Paging;
}());
exports.Paging = Paging;
