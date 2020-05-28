import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "../base.components";
import { Router } from "@angular/router";
import { ResumoCarteira } from "../models/resumoCarteira";
import { LancamentoCaixaService } from "../lancamentoCaixa/lancamentoCaixa.service";

@Component({
    selector: 'app-resumo-carteira',
    templateUrl: './resumoCarteira.component.html',
    styleUrls: ['./resumoCarteira.component.css']
})
export class ResumoCarteiraComponent extends BaseComponent implements OnInit {

    constructor(protected router: Router,
                private lancamentoCaixaService: LancamentoCaixaService) {
        super(router);
    }

    ngOnInit(): void {
        this.searchResumoCarteira();
    }

    headersArray: string[] = [ "Data", "Tipo", "Valor", "Descrição"];

    resumoCarteira: ResumoCarteira = new ResumoCarteira();
    dataSearch: Date | string = "";

    searchResumoCarteira() {
        let query = {
            data: { '$regex': this.dataSearch }
        }

        this.lancamentoCaixaService.resumo(query).subscribe((resumo) => {
            this.resumoCarteira = resumo;
            this.applyMascara();
        },
        (error) => {
            console.log(error);
            this.message = error;
            this.showMessage = true;
        });
    }

    applyMascara() {
        let mascara = "000.000.000,00";

        this.resumoCarteira.saldoTotal
    }
}