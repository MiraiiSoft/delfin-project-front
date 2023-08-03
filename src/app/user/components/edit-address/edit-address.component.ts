import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Direccion } from 'src/app/auth/interfaces/login.interface';

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
    pais: [ this.data.direccion.ciudad.id_pais ,[ Validators.required ] ],
    id_ciudad: [ this.data.direccion.id_ciudad ,[ Validators.required ] ],
    codigo_postal: [ this.data.direccion.codigo_postal ,[ Validators.required, Validators.minLength(5), Validators.maxLength(5) ] ],
    municipio: [ this.data.direccion.municipio ,[ Validators.required ] ],
    calle: [ this.data.direccion.calle ,[ Validators.required ] ],
    colonia: [ this.data.direccion.colonia ,[ Validators.required ] ],
    num: [ this.data.direccion.num ,[ Validators.minLength(1), Validators.pattern(/^[0-9]{1,3}$/), Validators.maxLength(3) ] ],
    telefono: [ this.data.direccion.telefono ,[ Validators.minLength(10), Validators.pattern(/^[0-9]{10}$/), Validators.maxLength(10) ] ],
    referencia: [ this.data.direccion.referencia ,[ Validators.maxLength(250) ] ]
  });

  ngOnInit(): void {
  }

  closeModalAddress(){
    this.dialog.closeAll();
  }


}

interface data{
  nombrePersona: string;
  direccion: Direccion;
}