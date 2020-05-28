import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  usuarioLogado: string = '';

  ngOnInit(): void {
    this.getItemLocalStorage();
  }



  getItemLocalStorage() {
    this.usuarioLogado = localStorage.getItem('usuario');
  }

  deslogar() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('idLoja');

    this.router.navigateByUrl('/');
  }
}