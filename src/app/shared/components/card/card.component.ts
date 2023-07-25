import { Component, AfterViewInit, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { IcardData } from '../../interfaces/card.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {

  @ViewChild('asContentImg') contentImg!: ElementRef;
  @Input() data!: IcardData;
  @Input() height!: number;
  @Input() width!: number;

  constructor( private renderer2: Renderer2, private router: Router ) { }

  ngAfterViewInit(): void {
    const asContentImg = this.contentImg.nativeElement;

    if( this.height ){
      this.renderer2.setStyle( asContentImg, 'height', `${this.height}rem` );
    }else{
      this.renderer2.setStyle( asContentImg, 'height', `25rem` );
    }

    if(  this.width ){
      this.renderer2.setStyle( asContentImg, 'width', `${this.width}rem` );
    }else{
      this.renderer2.setStyle( asContentImg, 'width', `15rem` )
    }
  }

  openDetail( id: number ){
    this.router.navigate(['/site/products/detail'],{
      queryParams: {
        product: id
      }
    });
  }

}
