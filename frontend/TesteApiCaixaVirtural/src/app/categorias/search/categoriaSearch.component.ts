import { Component, EventEmitter, Output, Input } from "@angular/core";
import { Categoria } from "src/app/models/categoria";
import { CategoriaService } from "../categoria.service";

declare var $: any;

@Component({
    selector: 'app-search-categorias',
    templateUrl: './categoriaSearch.component.html',
    styleUrls: ['./categoriaSearch.component.css']
})
export class CategoriaSearchComponent {

    categoria: Categoria[];

    nomeTela: string = "categorias";
    headersArray: string[] = [ "Nome"];
    dadosSearch: string = "";
    @Input() idLoja: string;
    @Output() selectDados: EventEmitter<Categoria> = new EventEmitter<Categoria>();

    constructor(private categoriaService: CategoriaService) {
    }
   
    selectRegister(index: number) {
        let dados = this.categoria[index];

        $('#modalSearch').modal('hide');
        this.selectDados.emit(dados);
    }

    close() {
        $('#modalSearch').modal('hide');
    }

    search() {
        let query = {
            nome: { '$regex': this.dadosSearch },
            idLoja: this.idLoja
        }

        this.categoriaService.search(query).subscribe((categorias) => {
            this.categoria = categorias;
        },
            (errors) => {
                console.log(errors);
            }
        );
    }
}