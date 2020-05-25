import { BaseModelRepository } from "../models/BaseModelRepository";

export interface BaseRepositoryInterface<T extends BaseModelRepository> {
    insert(dados: T): void;
    update(dados: T): void;
    delete(dados: T): void;
    search(query: {}): any;
}