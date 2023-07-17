import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  imagenUrl: string = 'assets/imagenes/fondo.png';
  logoUrl: string = 'assets/imagenes/LogoPapeleria.png'
  constructor() { }

  ngOnInit(): void {
  }

}
