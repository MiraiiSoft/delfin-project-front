import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: data, private dialog: MatDialog ) { }

  iconUsr = "assets/img/user/iconoUsuario.png";
  prefijos = [ "+52" ];

  paises = [
    {
      id_pais: 1,
      pais: "México"
    },
    {
      id_pais: 2,
      pais: "Estados Unidos"
    },
    {
      id_pais: 3,
      pais: "Canadá"
    }
  ];

  ciudades = [
    {
      id_ciudad: 1,
      ciudad: "Ciudad de México",
      id_pais: 1
    }
  ]

  ngOnInit(): void {
  }

  closeModalAddress(){
    this.dialog.closeAll();
  }


}

interface data{
  nombrePersona: string
}