import { UsuarioService } from "./usuario.service";
import { UsuarioComponent } from "./usuario.component";
import { NgModule } from "@angular/core";
import { UsuarioSearchComponent } from "./search/usuarioSearch.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
      UsuarioComponent,
      UsuarioSearchComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule
    ],
    providers: [UsuarioService]
  })
  export class UsuarioModule { }