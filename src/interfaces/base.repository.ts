export interface BaseRepository<T, F = Partial<T>> {
  create(data: T): Promise<T>;
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  update(id: string, data: T): Promise<T | null>;
  delete(id: string): Promise<T | null>;
  findAllPaginatedWithFilter(filter: F, page: number, limit: number): Promise<T[]>;
}
