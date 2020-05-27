import { NgModule } from "@angular/core";
import { CategoriasComponent } from "./categorias.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CategoriaService } from "./categoria.service";
import { HttpClientModule } from "@angular/common/http";
import { CategoriaSearchComponent } from "./search/categoriaSearch.component";

@NgModule({
    declarations: [
      CategoriasComponent,
      CategoriaSearchComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule
    ],
    providers: [CategoriaService]
  })
  export class CategoriaModule { }