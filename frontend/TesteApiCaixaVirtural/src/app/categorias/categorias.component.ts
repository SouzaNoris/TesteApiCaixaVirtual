import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../base.components';
import { CategoriaService } from './categoria.service';
import { Categoria } from '../models/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent extends BaseComponent implements OnInit {

  categoriaForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder,
              private categoriaService: CategoriaService) { 
    super();
  }

  ngOnInit() {
    this.categoriaForm = this.formBuilder.group({
      nome: ['', Validators.required]
    });
  }

  public saveCategoria(): void {
    const categoria = new Categoria();
    categoria.nome = this.categoriaForm.get('nome').value;

    this.categoriaService.insert(categoria).subscribe((response) => {
      if (response) {
        this.stateVisible();
        alert('Salvo com sucesso!')
      }
    },
    (error) => {
      console.log(error);
    });
  }
}
