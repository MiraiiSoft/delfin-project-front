import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.scss']
})
export class HomeuserComponent implements OnInit {

  constructor() { }

  iconUsr = "assets/img/iconoUsuario.png";

  ngOnInit(): void {
  }

}
