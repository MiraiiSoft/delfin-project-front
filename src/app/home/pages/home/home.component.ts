import { Component, OnInit } from '@angular/core';
import { IsliderData } from 'src/app/shared/interfaces/slider.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgSlider: IsliderData[] = [
    {
      img: "assets/img/slider/imagenOferta.png",
      title: "presentacion"
    },
    {
      img: "assets/img/slider/imagenOferta.png",
      title: "presentacion"
    }
  ];

  products: IsliderData[] = [
    {
      title: "lapicero negro",
      img: "assets/img/products/img1.png",
      price: 30,
      link: "1"
    },
    {
      title: "lapicero rojo",
      img: "assets/img/products/img2.png",
      price: 25,
      link: "2"
    },
    {
      title: "lapicero azul",
      img: "assets/img/products/img3.png",
      price: 20,
      link: "3"
    },
    {
      title: "lapicero morado",
      img: "assets/img/products/img4.png",
      price: 15,
      link: "4"
    },
    {
      title: "lapicero azul",
      img: "assets/img/products/img3.png",
      price: 20,
      link: "3"
    },
    {
      title: "lapicero morado",
      img: "assets/img/products/img4.png",
      price: 15,
      link: "4"
    }
  ];

  categorias: IsliderData[] = [
    {
      title: "lapiz",
      link: "1"
    },
    {
      title: "lapicero",
      link: "2"
    },
    {
      title: "borrador",
      link: "3"
    },
    {
      title: "corrector",
      link: "4"
    },
    {
      title: "cuadernos",
      link: "5"
    },
    {
      title: "marcadores",
      link: "6"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
