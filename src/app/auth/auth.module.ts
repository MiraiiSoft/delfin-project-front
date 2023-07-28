import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './pages/confirm/confirm.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    ConfirmComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
