import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { NgxGlideComponent, NgxGlideModule } from 'ngx-glide';
import { MaterialModule } from 'src/app/material/material.module';
import { IsliderData } from '../../interfaces/slider.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports: [
    NgxGlideModule,
    NgFor,
    NgIf,
    MaterialModule
  ]
})
export class SliderComponent implements OnInit {

  @ViewChild( NgxGlideComponent, { static: false } ) ngxGlide!: NgxGlideComponent;

  @Input() data!: IsliderData[];
  @Input() isClickable: boolean = false;
  @Input() isImage: boolean = true;
  @Input() routerName?: string;
  @Input() nameQueryParam?: string;

  //config glide
  @Input() autoplay: number | boolean = 5000;
  @Input() animationDuration: number = 400;
  @Input() perView: number = 1;
  @Input() gap: number = 10;
  @Input() showBullets: boolean = true;
  @Input() rewind: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
