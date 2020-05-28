import { LoginComponent } from "./login.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule
    ],
    providers: []
  })
  export class LoginModule { }