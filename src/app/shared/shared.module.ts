import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { SliderComponent } from './components/slider/slider.component';
import { NgxGlideModule } from 'ngx-glide';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    MaterialModule,
    SliderComponent,
    NgxGlideModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SliderComponent
  ]
})
export class SharedModule { }
