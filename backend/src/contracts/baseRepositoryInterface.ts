import { BaseModelRepository } from "../models/repository/base/BaseModelRepository";

export interface BaseRepositoryInterface<T extends BaseModelRepository> {
    insert(dados: T): void;
    update(dados: T): void;
    delete(query: {}): void;
    search(query: {}): any;
}