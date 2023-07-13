import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './components/site/site.component';
import { SiteRoutingModule } from './site-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SiteComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class SiteModule { }
