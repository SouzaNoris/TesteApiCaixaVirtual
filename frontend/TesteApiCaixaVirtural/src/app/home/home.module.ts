import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule
    ],
    providers: []
  })
  export class HomeModule { }