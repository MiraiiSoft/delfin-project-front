import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeuserComponent } from './pages/homeuser/homeuser.component';
import { DatosUserComponent } from './components/datos-user/datos-user.component';
import { ComprasComponent } from './components/compras/compras.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material/material.module';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeuserComponent,
    DatosUserComponent,
    ComprasComponent,
    EditProfileComponent,
    EditAddressComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
