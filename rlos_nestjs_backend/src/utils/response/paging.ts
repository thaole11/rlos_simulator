// Paging class
export class Paging {
  // Current page
  page: number;
  // Total page
  totalPage: number;
  // Total items
  totalItems: number;
  // Limit items per page
  limit: number;

  constructor(page: number, limit: number, totalItems: number, totalPage: number) {
    this.page = page;
    this.limit = limit;
    this.totalItems = totalItems;
    this.totalPage = totalPage;
  }
}
