import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../base.components';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { LancamentoCaixa } from '../models/lancamentoCaixa';
import { LancamentoCaixaService } from './lancamentoCaixa.service';
import { LancamentoCaixaSearchComponent } from './search/lancamentoCaixaSearch.component';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../categorias/categoria.service';

declare var $: any;

@Component({
    selector: 'app-lancamento-caixa',
    templateUrl: './lancamentoCaixa.component.html',
    styleUrls: ['./lancamentoCaixa.component.css']
})
export class LancamentoCaixaComponent extends BaseComponent implements OnInit {

    lancamentoCaixaForm: FormGroup;
    categorias: Categoria[] = [];

    @ViewChild(LancamentoCaixaSearchComponent) lancamentoCaixaSearchComponent: LancamentoCaixaSearchComponent;

    constructor(private formBuilder: FormBuilder,
        private lancamentoCaixaService: LancamentoCaixaService,
        protected router: Router,
        private categoriaService: CategoriaService) {
        super(router);
    }

    ngOnInit() {
        this.lancamentoCaixaForm = this.formBuilder.group({
            id: [''],
            data: ['', Validators.required],
            categoria: ['', Validators.required],
            tipo: ['entrada', Validators.required],
            valor: ['', Validators.required],
            descricao: ['', Validators.required]
        });
        this.getCategorias();
    }

    getCategorias() {
        this.categoriaService.search({ idLoja: this.idLoja }).subscribe((categoriasList) => {
            this.categorias = categoriasList;
        })
    }

    private getInstanceLancamentoCaixa(): LancamentoCaixa {
        const lancamentoCaixa = new LancamentoCaixa();
        let id = this.lancamentoCaixaForm.get('id').value;
        let idCategoria = this.lancamentoCaixaForm.get('categoria').value;

        if (!id) {
            lancamentoCaixa.id = Guid.create().toString();
            this.lancamentoCaixaForm.get('id').setValue(lancamentoCaixa.id);
        }
        else
            lancamentoCaixa.id = id;

        lancamentoCaixa.categoria = this.categorias.filter(x => x.id = idCategoria)[0];
        lancamentoCaixa.data = this.lancamentoCaixaForm.get('data').value;
        lancamentoCaixa.descricao = this.lancamentoCaixaForm.get('descricao').value;
        lancamentoCaixa.tipo = this.lancamentoCaixaForm.get('tipo').value;
        lancamentoCaixa.valor = this.lancamentoCaixaForm.get('valor').value;
        lancamentoCaixa.idLoja = this.idLoja;

        return lancamentoCaixa;
    }

    private enableDisableForm(bloquear: boolean) {
        if (bloquear) {
            this.lancamentoCaixaForm.get('data').disable();
            this.lancamentoCaixaForm.get('descricao').disable();
            this.lancamentoCaixaForm.get('tipo').disable();
            this.lancamentoCaixaForm.get('valor').disable();
            this.lancamentoCaixaForm.get('categoria').disable();
        }
        else {
            this.lancamentoCaixaForm.get('data').enable();
            this.lancamentoCaixaForm.get('descricao').enable();
            this.lancamentoCaixaForm.get('tipo').enable();
            this.lancamentoCaixaForm.get('valor').enable();
            this.lancamentoCaixaForm.get('categoria').enable();
        }
    }

    getDadosModalSearch(lancamentoCaixa: LancamentoCaixa) {
        this.lancamentoCaixaForm.get('id').setValue(lancamentoCaixa.id);
        this.lancamentoCaixaForm.get('data').setValue(lancamentoCaixa.data);
        this.lancamentoCaixaForm.get('descricao').setValue(lancamentoCaixa.descricao);
        this.lancamentoCaixaForm.get('tipo').setValue(lancamentoCaixa.tipo);
        this.lancamentoCaixaForm.get('valor').setValue(lancamentoCaixa.valor);
        this.lancamentoCaixaForm.get('categoria').setValue(lancamentoCaixa.categoria.id);

        this.stateVisible();
        this.showMessage = false;
        this.enableDisableForm(true);
    }

    protected new() {
        this.stateInsert();
        this.enableDisableForm(false);
        this.lancamentoCaixaForm.get('id').setValue(null);
        this.lancamentoCaixaForm.get('data').setValue(null);
        this.lancamentoCaixaForm.get('descricao').setValue(null);
        this.lancamentoCaixaForm.get('tipo').setValue(null);
        this.lancamentoCaixaForm.get('valor').setValue(null);
        this.lancamentoCaixaForm.get('categoria').setValue(null);
    }

    public saveLancamentoCaixa(): void {
        let id = this.lancamentoCaixaForm.get('id').value;

        if (id) {
            this.updateLancamentoCaixa();
        }
        else {
            const lancamentoCaixa = this.getInstanceLancamentoCaixa();

            this.lancamentoCaixaService.insert(lancamentoCaixa).subscribe((response) => {
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

    alterarLancamentoCaixa() {
        this.stateUpdate();
        this.showMessage = false;
        this.enableDisableForm(false);
    }

    public updateLancamentoCaixa(): void {
        const lancamentoCaixa = this.getInstanceLancamentoCaixa();

        this.lancamentoCaixaService.update(lancamentoCaixa).subscribe((response) => {
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

    public deleteLancamentoCaixa(): void {
        const lancamentoCaixa = this.getInstanceLancamentoCaixa();

        this.lancamentoCaixaService.delete(lancamentoCaixa).subscribe((response) => {
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
