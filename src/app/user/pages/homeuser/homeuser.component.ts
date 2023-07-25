import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from 'src/app/services/loading-spinner.service';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.scss']
})
export class HomeuserComponent implements OnInit {

  constructor( private loadingSpinner: LoadingSpinnerService ) { }

  iconUsr = "assets/img/user/iconoUsuario.png";

  ngOnInit(): void {
    this.loadingSpinner.openSpinner();
  }

}