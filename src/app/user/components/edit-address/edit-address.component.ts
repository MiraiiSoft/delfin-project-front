import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Direccion } from 'src/app/auth/interfaces/login.interface';
import { ICiudad } from 'src/app/interfaces/ciudad.interface';
import { IMunicipio } from 'src/app/interfaces/municipio.interface';
import { Pais } from 'src/app/interfaces/pais.interface';
import { CiudadService } from 'src/app/services/ciudad.service';
import { DireccionService } from 'src/app/services/direccion.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { PaisService } from 'src/app/services/pais.service';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { mensajeCorrecto, mensajeError } from 'src/app/utils/alertSwal';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: data, private dialog: MatDialog, private fb: FormBuilder,
    private paisService: PaisService, private ciudadService: CiudadService, private municipioService: MunicipioService,
    private direccionService: DireccionService ) { }

  iconUsr = "assets/img/user/iconoUsuario.png";
  prefijos = [ "+52" ];

  paises!: Pais[]; 

  ciudades!: ICiudad[];

  municipios!: IMunicipio[];

  formAddres: FormGroup = this.fb.group({
    pais: [ this.data.direccion.ciudad!.id_pais ,[ Validators.required ] ],
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
    this.paisService.getAllPais().subscribe( res => {
      if( res.data ){
        this.paises = res.data;
      }
    });

    this.ciudadService.getAllCiudades().subscribe( res => {
      if( res.data ){
        this.ciudades = res.data;
      }
    });

    this.municipioService.getAllMunicipio().subscribe( res => {
      if( res.data ){
        this.municipios = res.data;
      }
    });
  }

  save(){
    this.openSpinner();
    
    this.formAddres.removeControl('pais');

    this.direccionService.getUpdateDireccion( this.data.direccion.id_direccion!,
      this.formAddres.value ).subscribe( res => {
        if( !res.success ){
          mensajeError(res.message || '');
        }

        if( res.success ){
          this.closeModalAddress();
          mensajeCorrecto( 'Actualización direccion', res.message || '' );
        }

      });

    

  }

  closeModalAddress(){
    this.dialog.closeAll();
  }

  openSpinner(){
    this.dialog.open( SpinnerComponent, {
      disableClose: true
    } );
  }


}

interface data{
  nombrePersona: string;
  direccion: Direccion;
}