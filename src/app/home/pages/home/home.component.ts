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

  newProducts: IcardData[] = []

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

   function shuffleArray<P>(array: P[]): P[] {
      const newArray = [...array];
      for(let i = newArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray
    }

    this.productosServices.getProductos().subscribe(data => {
      console.log(data);

      const allProductos: IsliderData[] = data.data.map(item => ({
        img: item.imagen.url[0],
        title: item.nombre,
        price: parseFloat(item.precio_unitario),
        link: item.id_producto.toString()

      }));

      const shuffledProductos = shuffleArray(allProductos);
      this.products = shuffledProductos.slice(0, 10);

      const productsData: IcardData[] = data.data.map(item =>{
        return{
          title: item.nombre,
          img: item.imagen.url[0],
          id: item.id_producto,
          price: parseFloat(item.precio_unitario),
        }
      })
      const last9Products = productsData.slice(-9);

      this.newProducts = last9Products;

    });




  }
}
