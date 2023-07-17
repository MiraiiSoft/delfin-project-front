import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeuserComponent } from './pages/homeuser/homeuser.component';
import { DatosUserComponent } from './components/datos-user/datos-user.component';
import { ComprasComponent } from './components/compras/compras.component';

const routes: Routes = [
  {
    path: '',
    component: HomeuserComponent,
    children: [
      {
        path: '',
        redirectTo: 'datos',
        pathMatch: 'full'
      },
      {
        path: 'datos',
        component: DatosUserComponent
      },
      {
        path: 'compras',
        component: ComprasComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
