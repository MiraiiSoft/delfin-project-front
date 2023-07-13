import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    MatInputModule,
    MatToolbarModule
  ]
})
export class AuthModule { }
