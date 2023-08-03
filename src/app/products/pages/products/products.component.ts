import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IcardData } from 'src/app/shared/interfaces/card.interface';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../../components/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selected: string = ''
  categoryPanel: boolean = false;
  colorPanel: boolean = false;
  brandPanel: boolean = false;
  
  openBottomSheet(): void {
    this.bottom.open(BottomSheetComponent);
  }
  products: IcardData[] = [
    {
      title: "Lapicero tres colores",
      img: "assets/img/products/img1.png",
      id: 1,
      price: 30
    },
    {
      title: "Lapicero azul",
      img: "assets/img/products/img3.png",
      id: 2,
      price: 30
    },
    {
      title: "Lapicero verde",
      img: "assets/img/products/img4.png",
      id: 3,
      price: 30
    },
    {
      title: "Lapicero rojo",
      img: "assets/img/products/img2.png",
      id: 4,
      price: 30
    },
    {
      title: "Lapicero negro",
      img: "assets/img/products/img3.png",
      id: 5,
      price: 30
    },
    {
      title: "Lapicero morado",
      img: "assets/img/products/img4.png",
      id: 6,
      price: 30
    },
    {
      title: "Lapicero naranja",
      img: "assets/img/products/img2.png",
      id: 7,
      price: 30
    }
  ]

  categories: any = [
    {
      id_categoria: 1,
      categoria: "Lapiceros"
    },
    {
      id_categoria: 1,
      categoria: "Gomas"
    },
    {
      id_categoria: 1,
      categoria: "Tijeras"
    },
    {
      id_categoria: 1,
      categoria: "Libretas"
    }
  ]

  colors: any = [
    {
      id_color: 1,
      color: 'Blanco',
      hexa: '#fffffff'
    },
    {
      id_color: 2,
      color: 'Blanco',
      hexa: '#fffffff'
    },
    {
      id_color: 3,
      color: 'Blanco',
      hexa: '#fffffff'
    },
  ]

  brands: any = [
    'Bic',
    'Marca 2',
    'Marca 3'
  ]

  constructor(private router: Router, public bottom: MatBottomSheet) { }

  ngOnInit(): void {
  }

  public appendQueryParams(id: number) {
    this.router.navigate(['/site/products/detail'],{
      queryParams: {
        product: id
      }
    });
  }

}
