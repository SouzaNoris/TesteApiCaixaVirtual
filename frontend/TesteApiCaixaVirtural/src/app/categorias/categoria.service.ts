import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { ICrudServiceInterface } from "../contracts/crudService.interface";
import { Categoria } from "../models/categoria";

@Injectable({
    providedIn: 'root'
})
export class CategoriaService implements ICrudServiceInterface<Categoria> {
    urlApi: string = "http://localhost:8080/api/v1/categoria";

    constructor(private http: HttpClient) { }

    headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    insert(dados: Categoria) {
        return this.http.post<Categoria>(this.urlApi, JSON.stringify(dados));
    }
    
    update(dados: Categoria) {
        throw new Error("Method not implemented.");
    }
    delete(query: {}) {
        throw new Error("Method not implemented.");
    }
    search(query: {}): Categoria[] {
        throw new Error("Method not implemented.");
    }
}