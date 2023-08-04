import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { MaterialModule } from '../material/material.module';
import { CartService } from './services/cart.service';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    CartComponent,
    PaymentComponent
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
