import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './pages/detail/detail.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    DetailComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
