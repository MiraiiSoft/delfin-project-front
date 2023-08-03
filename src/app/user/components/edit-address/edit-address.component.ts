import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: data, private dialog: MatDialog, private fb: FormBuilder ) { }

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
    },
    {
      id_ciudad: 2,
      ciudad: "Puebla",
      id_pais: 1
    }
  ]

  municipios = [
    {
      id_municipio: 1,
      municipio: "Huauchinango",
      id_ciudad: 2
    }
  ]

  formAddres: FormGroup = this.fb.group({
    
  });

  ngOnInit(): void {
  }

  closeModalAddress(){
    this.dialog.closeAll();
  }


}

interface data{
  nombrePersona: string
}