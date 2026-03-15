import { UpdateQuery, QueryFilter } from "mongoose";

export interface BaseRepository<T> {
  create(data: T): Promise<T>;
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  update(id: string, data: UpdateQuery<T>): Promise<T | null>;
  delete(id: string): Promise<T | null>;
  findAllPaginatedWithFilter(filter: QueryFilter<T>, page: number, limit: number): Promise<T[]>;
}
