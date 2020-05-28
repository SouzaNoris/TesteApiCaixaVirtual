import { Injectable } from "@angular/core";
import { HttpClient,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { ICrudServiceInterface } from "../contracts/crudService.interface";
import { Usuario } from "../models/usuario";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService implements ICrudServiceInterface<Usuario> {
    urlApi: string = "http://localhost:8080/api/v1/cadastroUsuario";

    constructor(private http: HttpClient) { }

    insert(dados: Usuario) {
        return this.http.post<Usuario>(this.urlApi, JSON.stringify(dados));
    }
    
    update(dados: Usuario) {
        return this.http.put<Usuario>(this.urlApi, JSON.stringify(dados));
    }
    
    delete(dados: Usuario) {
        return this.http.delete(`${this.urlApi}?id=${dados.id}`);
    }

    search(query: {}) {
        return this.http.post<Usuario[]>(`${this.urlApi}/search`, JSON.stringify(query));
    }
}