import { Component, OnInit } from '@angular/core';
import { IcardData } from 'src/app/shared/interfaces/card.interface';
import { IsliderData } from 'src/app/shared/interfaces/slider.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { CategoriasService } from 'src/app/services/categorias.service';
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
  ];

  newProducts: IcardData[] = [
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

  constructor(private productosServices: ProductosService, private categoriasService: CategoriasService) { }


  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe (data =>{
      console.log(data);

      const categoriasData: IsliderData[] = data.data.map(item =>{
        return{
          title: item.categoria,
          link: item.id_categoria.toString()
        }
      })
      this.categorias = categoriasData;
    })

    this.productosServices.getProductos().subscribe (data =>{
      console.log(data);
    })
  }

}
