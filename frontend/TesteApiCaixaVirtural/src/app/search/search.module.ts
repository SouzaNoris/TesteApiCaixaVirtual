import { NgModule } from "@angular/core";
import { SearchComponent } from "./search.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    declarations: [
      SearchComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      AgGridModule.withComponents([])
    ],
    exports: [
        SearchComponent
    ],
    providers: []
  })
  export class SearchModule { }