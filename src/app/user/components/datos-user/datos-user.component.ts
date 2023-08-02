import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { Login } from 'src/app/auth/interfaces/login.interface';
import { TransferDataLocalService } from 'src/app/services/transfer-data-local.service';

@Component({
  selector: 'app-datos-user',
  templateUrl: './datos-user.component.html',
  styleUrls: ['./datos-user.component.scss']
})
export class DatosUserComponent implements OnInit {

  $user!: Subscription;
  user!: Login;

  constructor( private dialog: MatDialog, private userService: UserService, private transferDataLocal: TransferDataLocalService
     ) { }

  ngOnInit(): void {
    this.getInfoUser();
  }

  getInfoUser(){
    this.openSpinner();

    this.$user = this.userService.getPerfil().subscribe( res => {
      
      if( res.data ){
        
        this.user = res.data;

        this.transferDataLocal.nameUser.emit({
          nombre: this.user.persona.nombre,
          apellido: this.user.persona.apellido
        });
      }
      console.log(this.user)
      this.closeSpinner();
    });
  }

  public openModalEditProfile(){
    this.dialog.open( EditProfileComponent,{
      
    } )
  };

  openSpinner(){
    this.dialog.open( SpinnerComponent, {
      disableClose: true
    } );
  }

  closeSpinner(){
    this.dialog.closeAll();
  }

}
