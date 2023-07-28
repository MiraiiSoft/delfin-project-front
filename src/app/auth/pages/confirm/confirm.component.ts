import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  logoUrl: string = 'assets/img/auth/LogoPapeleria.png';
  logoError: string ='assets/img/auth/error.png';
  logoCorrect: string ='assets/img/auth/correct.png';
  constructor() { }

  ngOnInit(): void {
  }

}
