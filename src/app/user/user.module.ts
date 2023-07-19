import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeuserComponent } from './pages/homeuser/homeuser.component';
import { DatosUserComponent } from './components/datos-user/datos-user.component';
import { ComprasComponent } from './components/compras/compras.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material/material.module';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';



@NgModule({
  declarations: [
    HomeuserComponent,
    DatosUserComponent,
    ComprasComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
