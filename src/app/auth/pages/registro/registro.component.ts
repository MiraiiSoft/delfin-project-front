import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CustomValidator } from 'src/app/utils/validators/custom.validator';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  logoUrl: string = 'assets/img/auth/LogoPapeleria.png';

  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService ) { }

  registerForm: FormGroup = this.fb.group({
    nombre:     [ '', [ Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z ]{2,254}$/) ] ],
    apellido:   [ '', [ Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z ]{2,254}$/) ] ],
    telefono:   [ '', [ Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]{10}$/), Validators.maxLength(10) ] ],
    correo:     [ '', [ Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ] ],
    usuario:    [ '', [ Validators.required, Validators.minLength(5), Validators.maxLength(15) ] ],
    contraseña: [ '', [ Validators.required, Validators.minLength(8) ] ],
    confirmContra: [ '', [ Validators.required, Validators.minLength(8) ] ]
  })

  ngOnInit(): void {
  }

  validConfirmPass(): boolean | undefined | null {
    let res!: ValidationErrors | null;

    if( !this.registerForm.get('contraseña')?.dirty && this.registerForm.get('confirmContra')?.dirty ) return null;

    res = CustomValidator.validationConfirmPass( this.registerForm.get('contraseña')?.value, this.registerForm.get('confirmContra')?.value );

    this.registerForm.get('confirmContra')?.setErrors(res);
    return this.registerForm.get('confirmContra')?.hasError('isDifferent');
  }

  register(){
    console.log(this.registerForm.get('telefono')?.errors)
    console.log(this.registerForm.valid)
    console.log(this.registerForm.value)
  }

}
