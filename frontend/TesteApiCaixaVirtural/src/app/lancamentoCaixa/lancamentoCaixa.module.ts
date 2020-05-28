import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LancamentoCaixaService } from "./lancamentoCaixa.service";
import { LancamentoCaixaComponent } from "./lancamentoCaixa.component";
import { LancamentoCaixaSearchComponent } from "./search/lancamentoCaixaSearch.component";

@NgModule({
    declarations: [
      LancamentoCaixaComponent,
      LancamentoCaixaSearchComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      FormsModule
    ],
    providers: [LancamentoCaixaService]
  })
  export class LancamentoCaixaModule { }