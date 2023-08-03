import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EditAddressComponent } from '../edit-address/edit-address.component';
import { Login } from 'src/app/auth/interfaces/login.interface';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/utils/validators/custom.validator';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { UserService } from '../../services/user.service';
import { mensajeCorrecto, mensajeError } from 'src/app/utils/alertSwal';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  imgLogo = "assets/img/auth/LogoPapeleria.png";
  prefijos = [ "+52" ];


  constructor( private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: Login, private fb: FormBuilder,
    private userService: UserService ) { }

  formUser: FormGroup = this.fb.group({
    nombre:     [ '', [ Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z ]{2,254}$/) ] ],
    apellido:   [ '', [ Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z ]{2,254}$/) ] ],
    telefono:   [ '', [ Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]{10}$/), Validators.maxLength(10) ] ],
    correo:     [ '', [ Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ] ],
    usuario:    [ '', [ Validators.required, Validators.minLength(5), Validators.maxLength(15) ] ],
    password: [ '', [ Validators.minLength(8) ] ],
    confirmContra: [ '', [ Validators.minLength(8) ] ],
    id_roll: [ this.data.id_roll ],
    id_persona: [ this.data.id_persona ],
    id_direccion: [ this.data.persona.id_direccion ]
  });

  ngOnInit(): void {
    
    this.formUser.get('nombre')?.setValue(this.data.persona.nombre);
    this.formUser.get('apellido')?.setValue(this.data.persona.apellido);
    this.formUser.get('telefono')?.setValue(this.data.persona.telefono);
    this.formUser.get('correo')?.setValue(this.data.correo);
    this.formUser.get('usuario')?.setValue(this.data.usuario);
  }

  save(){
    
    this.openSpinneer();
    
    this.formUser.removeControl('confirmContra');

    if( this.formUser.get('password')?.value == '' ){
      this.formUser.removeControl('password');
    }

    if( this.formUser.get('usuario')?.pristine ){
      this.formUser.removeControl('usuario');
    }

    if( this.formUser.get('correo')?.pristine ){
      this.formUser.removeControl('correo');
    }

    this.userService.updateDataUser( this.data.id_login, this.formUser.value ).subscribe( res => {
      
      if( !res.success ){
        this.closeSpinner();
        mensajeError( res.message || 'Error' );
      }

      if( res.success ){
        this.closeSpinner();
        mensajeCorrecto( 'Actualización datos', res.message || '' );
        this.closeModal();
      }

    });
  }

  validConfirmPass(): boolean | undefined | null {
    let res!: ValidationErrors | null;
    
    if( !this.formUser.get('password')?.dirty && this.formUser.get('confirmContra')?.dirty ) return null;

    res = CustomValidator.validationConfirmPass( this.formUser.get('password')?.value, this.formUser.get('confirmContra')?.value );

    this.formUser.get('confirmContra')?.setErrors(res);
    return this.formUser.get('confirmContra')?.hasError('isDifferent');
  }

  closeModal(){
    this.dialog.closeAll()
  }

  openEditAddress(){
    this.dialog.open( EditAddressComponent, {
      data: {
        nombrePersona: this.data.persona.nombre,
        direccion: this.data.persona.direccion
      }
    } );
  }

  openSpinneer(){
    this.dialog.open( SpinnerComponent, {
      disableClose: true
    } );
  }

  closeSpinner(){
    this.dialog.closeAll();
  }


}
