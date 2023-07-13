import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './components/site/site.component';
import { SiteRoutingModule } from './site-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SiteComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    RouterModule
  ]
})
export class SiteModule { }
