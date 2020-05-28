import { Component, OnInit, ViewChild } from "@angular/core";
import { BaseComponent } from "../base.components";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Usuario } from "../models/usuario";
import { Guid } from "guid-typescript";
import { UsuarioSearchComponent } from "./search/usuarioSearch.component";
import { UsuarioService } from "./usuario.service";

@Component({
    selector: 'app-cadastro-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent extends BaseComponent implements OnInit {

    usuarioForm: FormGroup;

    @ViewChild(UsuarioSearchComponent) usuarioSearchComponent: UsuarioSearchComponent;

    constructor(private formBuilder: FormBuilder,
        private usuarioService: UsuarioService,
        protected router: Router) {
        super(router);
    }

    ngOnInit() {
        this.usuarioForm = this.formBuilder.group({
            id: [''],
            usuario: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(4)]],
            confirmacao: ['', [Validators.required, Validators.minLength(4)]],
            nomeLoja: ['', Validators.required]
        });
    }

    private getInstanceUsuario(): Usuario {
        const usuario = new Usuario();
        let id = this.usuarioForm.get('id').value;

        if (id) {
            usuario.id = id;
        }
        else {
            usuario.id = Guid.create().toString();
            this.usuarioForm.get('id').setValue(usuario.id);
        }

        usuario.usuario = this.usuarioForm.get('usuario').value;
        usuario.senha = this.usuarioForm.get('password').value;
        usuario.confirmacao = this.usuarioForm.get('confirmacao').value;
        usuario.idLoja = this.usuarioForm.get('nomeLoja').value;

        return usuario;
    }

    private enableDisableForm(bloquear: boolean) {
        if (bloquear) {
            this.usuarioForm.get('usuario').disable();
            this.usuarioForm.get('password').disable();
            this.usuarioForm.get('confirmacao').disable();
            this.usuarioForm.get('nomeLoja').disable();
        }
        else {
            this.usuarioForm.get('usuario').enable();
            this.usuarioForm.get('password').enable();
            this.usuarioForm.get('confirmacao').enable();
            this.usuarioForm.get('nomeLoja').enable();
        }
    }

    getDadosModalSearch(usuario: Usuario) {
        this.usuarioForm.get('id').setValue(usuario.id);
        this.usuarioForm.get('usuario').setValue(usuario.usuario);
        this.usuarioForm.get('password').setValue(usuario.senha);
        this.usuarioForm.get('confirmacao').setValue(usuario.confirmacao);
        this.usuarioForm.get('nomeLoja').setValue(usuario.idLoja);

        this.stateVisible();
        this.showMessage = false;
        this.enableDisableForm(true);
    }

    protected new() {
        this.stateInsert();
        this.enableDisableForm(false);
        this.usuarioForm.get('id').setValue(null);
        this.usuarioForm.get('usuario').setValue(null);
        this.usuarioForm.get('password').setValue(null);
        this.usuarioForm.get('confirmacao').setValue(null);
        this.usuarioForm.get('nomeLoja').setValue(null);
    }

    public saveUsuario(): void {
        let id = this.usuarioForm.get('id').value;
        this.message = '';

        if (id) {
            this.updateUsuario();
        }
        else {
            const usuario = this.getInstanceUsuario();

            if (usuario.senha !== usuario.confirmacao) {
                this.showMessage = true;
                this.message = 'Senha informada e confirmação não são iguais. Por favor digite novamente.'
                this.usuarioForm.get('password').setValue(null);
                this.usuarioForm.get('confirmacao').setValue(null);

                return;
            }

            this.usuarioService.insert(usuario).subscribe((response) => {
                if (response) {
                    this.stateVisible();
                    this.enableDisableForm(true);
                    this.message = "Salvo com sucesso!";
                }
            },
                (error) => {
                    console.log(error);
                });
        }
    }

    verificaSenhaEConfirmacao(usuario: Usuario) {
        
    }

    alterarUsuario() {
        this.stateUpdate();
        this.showMessage = false;
        this.enableDisableForm(false);
    }

    public updateUsuario(): void {
        const usuario = this.getInstanceUsuario();

        if (usuario.senha !== usuario.confirmacao) {
            this.showMessage = true;
            this.message = 'Senha informada e confirmação não são iguais. Por favor digite novamente.'
            this.usuarioForm.get('password').setValue(null);
            this.usuarioForm.get('confirmacao').setValue(null);

            return;
        }

        this.usuarioService.update(usuario).subscribe((response) => {
            if (response) {
                this.stateVisible();
                this.enableDisableForm(true);
                this.message = "Registro atualizado com sucesso!";
            }
        },
            (error) => {
                console.log(error);
            });
    }

    public deleteUsuario(): void {
        const usuario = this.getInstanceUsuario();

        this.usuarioService.delete(usuario).subscribe((response) => {
            if (response) {
                this.stateInsert();
                this.new();
                this.message = "Registro deletado com sucesso!";
            }
        },
            (error) => {
                console.log(error);
            });
    }
}
