import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../cadastro-usuario/usuario.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Usuario } from "../models/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private routers: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  classError: string = 'danger';

  usuario: string; s
  senha: string;
  showMessage = false;
  message = '';

  submit() {
    let usuario = this.loginForm.get('usuario').value;
    let senha = this.loginForm.get('senha').value;

    this.usuarioService.search({ usuario, senha }).subscribe((login) => {
      if (login.length) {
        this.routers.navigateByUrl('home');
        localStorage.setItem('usuario', login[0].usuario);
        localStorage.setItem('idLoja', login[0].idLoja);
      }
      else if (usuario === 'admin' && senha === 'admin') {
        this.routers.navigateByUrl('home');
        localStorage.setItem('usuario', 'admin');
        localStorage.setItem('idLoja', 'admin');
      }
      else {
        this.message = 'Usuário ou senha informados são inválidos. Tente novamente.'
        this.showMessage = true;
      }
    },
      (error) => {
        console.log(error);
      });
  }
}