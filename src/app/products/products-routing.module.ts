import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: 'detail',
    component: DetailComponent    //  localhost:4200/site/products/detail
  },
  {
    path: '',
    component: ProductsComponent   //  localhost:4200/site/products/
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
export class ProductsRoutingModule { }
