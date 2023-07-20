import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditAddressComponent } from '../edit-address/edit-address.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  imgLogo = "assets/img/auth/LogoPapeleria.png";
  prefijos = [ "+52" ];

  dataPersona = {
    id_login: 1,
    correo: "juan@example.com",
    usuario: "juan123",
    password: "password1",
    is_verified: false,
    id_persona: 1,
    id_roll: 1,
    is_active: false,
    persona: {
      id_persona: 1,
      nombre: "Juan",
      apellido: "Pérez",
      telefono: "555-1234",
      id_direccion: 1
    },
    roll: {
      id_roll: 1,
      roll: "Admin"
    }
  };

  constructor( private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.dialog.closeAll()
  }

  openEditAddress(){
    this.dialog.open( EditAddressComponent, {
      data: {
        nombrePersona: this.dataPersona.persona.nombre
      }
    } );
  }


}
