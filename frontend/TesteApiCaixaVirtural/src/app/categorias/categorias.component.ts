import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../base.components';
import { CategoriaService } from './categoria.service';
import { Categoria } from '../models/categoria';
import { CategoriaSearchComponent } from './search/categoriaSearch.component';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent extends BaseComponent implements OnInit {

  categoriaForm: FormGroup;

  @ViewChild(CategoriaSearchComponent) categoriaSearchComponent: CategoriaSearchComponent;

  constructor(private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    protected router: Router) {
    super(router);
  }

  ngOnInit() {
    this.categoriaForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required]
    });
  }

  private getInstanceCategoria(): Categoria {
    const categoria = new Categoria();
    let id = this.categoriaForm.get('id').value;

    if (id) {
      categoria.id = id;
      categoria.nome = this.categoriaForm.get('nome').value;
    }
    else {
      categoria.id = Guid.create().toString();
      this.categoriaForm.get('id').setValue(categoria.id);
      categoria.nome = this.categoriaForm.get('nome').value;
    }

    return categoria;
  }

  private enableDisableForm(bloquear: boolean) {
    if (bloquear)
      this.categoriaForm.get('nome').disable();
    else
      this.categoriaForm.get('nome').enable();
  }

  getDadosModalSearch(categoria: Categoria) {
    this.categoriaForm.get('id').setValue(categoria.id);
    this.categoriaForm.get('nome').setValue(categoria.nome);

    this.stateVisible();
    this.showMessage = false;
    this.enableDisableForm(true);
  }

  protected new() {
    this.stateInsert();
    this.enableDisableForm(false);
    this.categoriaForm.get('id').setValue(null);
    this.categoriaForm.get('nome').setValue(null);
  }

  public saveCategoria(): void {
    let id = this.categoriaForm.get('id').value;

    if (id) {
      this.updateCategoria();
    }
    else {
      debugger;
      const categoria = this.getInstanceCategoria();

      this.categoriaService.insert(categoria).subscribe((response) => {
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

  alterarCategoria() {
    this.stateUpdate();
    this.showMessage = false;
    this.enableDisableForm(false);
  }

  public updateCategoria(): void {
    const categoria = this.getInstanceCategoria();

    this.categoriaService.update(categoria).subscribe((response) => {
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

  public deleteCategoria(): void {
    const categoria = this.getInstanceCategoria();

    this.categoriaService.delete(categoria).subscribe((response) => {
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
