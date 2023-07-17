import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeuserComponent } from './pages/homeuser/homeuser.component';
import { DatosUserComponent } from './components/datos-user/datos-user.component';
import { ComprasComponent } from './components/compras/compras.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    HomeuserComponent,
    DatosUserComponent,
    ComprasComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
