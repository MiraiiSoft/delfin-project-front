import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { Subscription } from 'rxjs';
import { mensajeError } from "../../../utils/alertSwal";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  logoUrl: string = 'assets/img/auth/LogoPapeleria.png';
  iconUser: string = 'assets/img/user/iconUser3.png';

  $login!: Subscription;

  constructor( private fb: FormBuilder, private router: Router, private authServie: AuthService, private dialog: MatDialog ) { }

  loginForm: FormGroup = this.fb.group({
    user: [ 'prueba', [ Validators.required ] ],
    pass: [ 'prueba123', [ Validators.required, Validators.minLength(5) ] ]
  });

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      // this.$login.unsubscribe();
  }

  ingresar(){
    this.openSpinner();

    this.$login = this.authServie.login( this.loginForm.value ).subscribe( res => {
      if( res === true ){
        this.closeSpinner();
        this.router.navigate(['/site/home']);
      }else{
        this.closeSpinner();
        mensajeError( res.message );
      }
    } );
  }

  openSpinner(){
    this.dialog.open( SpinnerComponent, {
      disableClose: true
    } );
  }

  closeSpinner(){
    this.dialog.closeAll();
  }

}
