import { NgFor, NgIf, TitleCasePipe, CurrencyPipe } from '@angular/common';
import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { NgxGlideComponent, NgxGlideModule } from 'ngx-glide';
import { MaterialModule } from 'src/app/material/material.module';
import { IsliderData } from '../../interfaces/slider.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports: [
    NgxGlideModule,
    NgFor,
    NgIf,
    TitleCasePipe,
    CurrencyPipe,
    MaterialModule
  ]
})
export class SliderComponent implements OnInit {

  @ViewChild( NgxGlideComponent, { static: false } ) ngxGlide!: NgxGlideComponent;

  @Input() data!: IsliderData[];
  @Input() isClickable: boolean = false;
  @Input() isImage: boolean = true;
  @Input() isText: boolean = false;
  @Input() routerName?: string;
  @Input() nameQueryParam?: string;

  //config glide
  @Input() autoplay: number | boolean = 5000;
  @Input() animationDuration: number = 400;
  @Input() perView: number = 1;
  @Input() gap: number = 10;
  @Input() showBullets: boolean = true;
  @Input() rewind: boolean = true;

  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor( private router: Router ) { }

  ngOnInit(): void {
    if( !this.isImage ){
      this.getScreenHeight = window.innerHeight;
      this.getScreenWidth = window.innerWidth;
      this.changePerView();
    }

  }

  open( param: string ){
    if( this.isClickable ){
      if( this.routerName && this.nameQueryParam){
        
        if( this.nameQueryParam == "category" ){
          this.router.navigate([`/${this.routerName}`], { 
            queryParams: {
              category: param
            }
          });

        }

        if( this.nameQueryParam == "product" ){
          this.router.navigate([`/${this.routerName}`],{
            queryParams: {
              product: param
            }
          });
        }

      }
      
    }
  }

  changePerView(){
    if( this.getScreenWidth <= 500){
      this.perView = 1;
    }else if( this.getScreenWidth <= 900 ){
      this.perView = 2;
    }else{
      this.perView = 4;
    }
    
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(){
    if( this.isImage === false ){
      this.getScreenHeight = window.innerHeight;
      this.getScreenWidth = window.innerWidth;
      this.changePerView();
    }
  }

}
