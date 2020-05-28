import { Component, EventEmitter, Output } from "@angular/core";
import { Usuario } from "src/app/models/usuario";
import { UsuarioService } from "../usuario.service";

declare var $: any;

@Component({
    selector: 'app-search-usuario',
    templateUrl: './usuarioSearch.component.html',
    styleUrls: ['./usuarioSearch.component.css']
})
export class UsuarioSearchComponent {

    usuarios: Usuario[];

    nomeTela: string = "usuario";
    headersArray: string[] = [ "Nome Usuario", "Loja"];
    dadosSearch: string = "";
    @Output() selectDados: EventEmitter<Usuario> = new EventEmitter<Usuario>();

    constructor(private usuarioService: UsuarioService) {
    }
   
    selectRegister(index: number) {
        let dados = this.usuarios[index];

        $('#usuarioModalSearch').modal('hide');
        this.selectDados.emit(dados);
    }

    close() {
        $('#usuarioModalSearch').modal('hide');
    }

    search() {
        let query = {
            usuario: { '$regex': this.dadosSearch }
        }

        this.usuarioService.search(query).subscribe((usuariosList) => {
            this.usuarios = usuariosList;
        },
            (errors) => {
                console.log(errors);
            }
        );
    }
}