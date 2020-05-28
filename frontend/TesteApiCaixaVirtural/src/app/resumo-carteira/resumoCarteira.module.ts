import { NgModule } from "@angular/core";
import { ResumoCarteiraComponent } from "./resumoCarteira.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
      ResumoCarteiraComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule
    ],
    exports: [

    ],
    providers: []
  })
  export class ResumoCarteiraModule { }