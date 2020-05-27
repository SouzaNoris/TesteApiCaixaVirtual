import { Injectable } from "@angular/core";
import { HttpClient,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { ICrudServiceInterface } from "../contracts/crudService.interface";
import { Categoria } from "../models/categoria";

@Injectable({
    providedIn: 'root'
})
export class CategoriaService implements ICrudServiceInterface<Categoria> {
    urlApi: string = "http://localhost:8080/api/v1/categoria";

    constructor(private http: HttpClient) { }

    insert(dados: Categoria) {
        return this.http.post<Categoria>(this.urlApi, JSON.stringify(dados));
    }
    
    update(dados: Categoria) {
        return this.http.put<Categoria>(this.urlApi, JSON.stringify(dados));
    }
    
    delete(dados: Categoria) {
        return this.http.delete(`${this.urlApi}?nome=${dados.nome}`);
    }

    search(query: {}) {
        return this.http.post<Categoria[]>(`${this.urlApi}/search`, JSON.stringify(query));
    }
}