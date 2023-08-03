import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransferDataLocalService } from 'src/app/services/transfer-data-local.service';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.scss']
})
export class HomeuserComponent implements OnInit, OnDestroy {

  constructor( private transferDataLocal: TransferDataLocalService ) { }

  iconUsr = "assets/img/user/iconoUsuario.png";

  private $nameUser!: Subscription;
  nameUser!: {
    nombre: string;
    apellido: string;
  }

  ngOnInit(): void {
    this.$nameUser = this.transferDataLocal.nameUser.subscribe( user =>  {
      if( user ){
        this.nameUser = user;
      }
    })
  }

  ngOnDestroy(): void {
      this.$nameUser.unsubscribe();
  }

}