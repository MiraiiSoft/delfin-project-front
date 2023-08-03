import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path: ':cartId',
    component: CartComponent
  }
]

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
export class CartRoutingModule { }
