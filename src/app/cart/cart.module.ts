import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { MaterialModule } from '../material/material.module';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule
  ],
  providers:[ 
    CartService 
  ]
})
export class CartModule { }
