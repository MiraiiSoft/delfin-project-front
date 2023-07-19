import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  logoUrl: string = 'assets/img/auth/LogoPapeleria.png';
  constructor() { }

  ngOnInit(): void {
  }

}
