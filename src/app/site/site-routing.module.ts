import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import("../home/home.module").then( m => m.HomeModule )
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SiteRoutingModule { }
