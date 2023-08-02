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

  products: IsliderData[] = [];

  categorias: IsliderData[] = [];

  newProducts: IcardData[] = [
  ]

  constructor(private productosServices: ProductosService, private categoriasService: CategoriasService) { }


  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe (data =>{

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

      const productsData: IsliderData[] = data.data.map(item =>{
        return{
          title: item.nombre,
          img: item.imagen.url[0],
          price: parseFloat(item.precio_unitario),
          link: item.id_producto.toString()
        }
      })
      const randomProducts: number [] = [];
      while (randomProducts.length < 10){
        const randomProduct = Math.floor(Math.random() * productsData.length);
        if (!randomProducts.includes(randomProduct)){
          randomProducts.push(randomProduct);
        }
      }
      this.products = randomProducts.map(index => productsData[index])
    })

    this.productosServices.getProductos().subscribe ( data =>{

      const productsData: IcardData[] = data.data.map(item =>{
        return{
          title: item.nombre,
          img: item.imagen.url[0],
          id: item.id_producto,
          price: parseFloat(item.precio_unitario),
        }
      })
      this.newProducts = productsData;
    })



  }
}
