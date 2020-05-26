import { NgModule } from "@angular/core";
import { CategoriasComponent } from "./categorias.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriaService } from "./categoria.service";
import { HttpClientModule } from "@angular/common/http";
import { SearchModule } from "../search/search.module";

@NgModule({
    declarations: [
      CategoriasComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule ,
      SearchModule
    ],
    providers: [CategoriaService]
  })
  export class CategoriaModule { }