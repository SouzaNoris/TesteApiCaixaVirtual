import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaModule } from './categorias/categoria.module';
import { Interceptor } from './auth/interceptor.module';
import { LancamentoCaixaModule } from './lancamentoCaixa/lancamentoCaixa.module';
import { ResumoCarteiraModule } from './resumo-carteira/resumoCarteira.module';
import { UsuarioModule } from './cadastro-usuario/usuario.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

declare var $: any;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoriaModule,
    Interceptor,
    LancamentoCaixaModule,
    ResumoCarteiraModule,
    UsuarioModule,
    LoginModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
