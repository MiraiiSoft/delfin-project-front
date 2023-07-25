import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './components/site/site.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import("../home/home.module").then( m => m.HomeModule )
      },
      {
        path: 'user',
        loadChildren: () => import("../user/user.module").then( m => m.UserModule )
      },
      {
        path: 'products',
        loadChildren: () => import("../products/products.module").then( m => m.ProductsModule )
      },
      {
        path: 'cart',
        loadChildren: () => import("../cart/cart.module").then( m=> m.CartModule)
      }

    ]
  }  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SiteRoutingModule { }
