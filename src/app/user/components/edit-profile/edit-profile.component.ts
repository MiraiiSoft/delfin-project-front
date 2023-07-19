import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  imgLogo = "assets/img/auth/LogoPapeleria.png";
  prefijos = [ "+52" ];

  constructor() { }

  ngOnInit(): void {
  }


}
