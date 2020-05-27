export interface ICrudServiceInterface<T> {
    insert(dados: T): any;
    update(dados: T): any;
    delete(query: {}): any;
    search(query: {}): any;
}