import { Injectable } from "@angular/core";
import { LancamentoCaixa } from "../models/lancamentoCaixa";
import { ICrudServiceInterface } from "../contracts/crudService.interface";
import { HttpClient } from "@angular/common/http";
import { ResumoCarteira } from "../models/resumoCarteira";

@Injectable({
    providedIn: 'root'
})
export class LancamentoCaixaService implements ICrudServiceInterface<LancamentoCaixa> {
    urlApi: string = "http://localhost:8080/api/v1/lancamentoCaixa";

    constructor(private http: HttpClient) { }

    insert(dados: LancamentoCaixa) {
        return this.http.post<LancamentoCaixa>(this.urlApi, JSON.stringify(dados));
    }
    
    update(dados: LancamentoCaixa) {
        return this.http.put<LancamentoCaixa>(this.urlApi, JSON.stringify(dados));
    }
    
    delete(dados: LancamentoCaixa) {
        return this.http.delete(`${this.urlApi}?id=${dados.id}`);
    }

    search(query: {}) {
        return this.http.post<LancamentoCaixa[]>(`${this.urlApi}/search`, JSON.stringify(query));
    }

    resumo(query: {}) {
        return this.http.post<ResumoCarteira>(`${this.urlApi}/resumo`, JSON.stringify(query));
    }
}