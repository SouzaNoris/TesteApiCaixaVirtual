import { Component, Output, EventEmitter, Input } from "@angular/core";
import { LancamentoCaixa } from "src/app/models/lancamentoCaixa";
import { LancamentoCaixaService } from "../lancamentoCaixa.service";

declare var $: any;

@Component({
    selector: 'app-search-lancamento-caixa',
    templateUrl: './lancamentoCaixaSearch.component.html',
    styleUrls: ['./lancamentoCaixaSearch.component.css']
})
export class LancamentoCaixaSearchComponent {

    lancamentoCaixa: LancamentoCaixa[];

    nomeTela: string = "lançamento de caixa";
    headersArray: string[] = [ "Data", "Tipo", "Valor", "Descrição"];
    
    dadosSearch: string = "";
    @Input() idLoja: string;
    @Output() selectDados: EventEmitter<LancamentoCaixa> = new EventEmitter<LancamentoCaixa>();

    constructor(private lancamentoCaixaService: LancamentoCaixaService) {
    }
   
    selectRegister(index: number) {
        let dados = this.lancamentoCaixa[index];

        $('#lancamentoCaixaSearchModal').modal('hide');
        this.selectDados.emit(dados);
    }

    close() {
        $('#lancamentoCaixaSearchModal').modal('hide');
    }

    search() {
        let query = {
            data: { '$regex': this.dadosSearch },
            idLoja: this.idLoja
        }

        this.lancamentoCaixaService.search(query).subscribe((lancamentoCaixa) => {
            this.lancamentoCaixa = lancamentoCaixa;
        },
            (errors) => {
                console.log(errors);
            }
        );
    }
}