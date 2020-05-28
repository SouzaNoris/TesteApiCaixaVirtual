import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { LancamentoCaixaComponent } from './lancamentoCaixa/lancamentoCaixa.component';
import { ResumoCarteiraComponent } from './resumo-carteira/resumoCarteira.component';
import { UsuarioComponent } from './cadastro-usuario/usuario.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'categoria', component: CategoriasComponent},
  { path: 'lancamentoCaixa', component: LancamentoCaixaComponent },
  { path: 'resumoCarteira', component: ResumoCarteiraComponent },
  { path: 'cadastroUsuarios', component: UsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
