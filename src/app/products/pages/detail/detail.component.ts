import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { TransferDataLocalService } from 'src/app/services/transfer-data-local.service';
import { ProductosService } from 'src/app/services/productos.service';
import { IOneProduct } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
  id_product: string = ''
  public indexSelected = 0;
  public imgSelected: string = "";
  public counter = 1;
  public current_price: any;

  product: IOneProduct = {
    id_producto: 0,
    codigo_barras: "",
    nombre: "",
    marca: "",
    descripcion: "Pluma Bolígarfo BIC Cláscio Dura + de Trazo Mediano Punto de Aguja 1 mm con tinta de baja viscosidad que brinda un flujo de tinta instantáneo, haciendo que la escritura sea suave, continua, con colores nítidos y brillantes.",
    imagen: {
      url: []
    },
    compra: "5",
    precio_unitario: "00",
    precio_mayoreo: "00",
    precio_caja: "99",
    inicio_mayoreo: 0,
    inicio_caja: 0,
    id_color: 0,
    id_categoria: 0,
    id_tipo: 0,
    color: [],
    tipo: {
      id_tipo: 0,
      tipo: ""
    },
    categoria: {
      id_categoria: 0,
      categoria: ""
    },
    inventario: [
      {
        id_inventario: 0,
        id_producto: 0,
        existencias: 0,
        unidadesPaquete: 0,
        numPaquete: 0
      }
    ]
  }
  
  constructor(private productService: ProductosService, public cartService:CartService, public transferDataLocalService: TransferDataLocalService, private activateRoute: ActivatedRoute) {
    this.id_product = this.activateRoute.snapshot.queryParamMap.get('product') || '0'
    
    this.productService.getOneProduct( parseInt(this.id_product) ).subscribe( res => {
      this.product = res.data

      this.current_price = this.product.precio_unitario

      if(this.product.imagen.url.length >= 0){
        this.selectImg(0);
      }
    })

   }

  ngOnInit(): void {
  }

  public selectImg(index: any) {
    this.indexSelected = index;
    this.imgSelected = this.product.imagen.url[index];
  }

  public incrementCounter() {
    if(this.counter == this.product.inventario[0].existencias)
      this.counter = this.product.inventario[0].existencias
    else
      this.counter += 1;
  }

  public decrementCounter() {
    if(this.counter <= 1) 
      this.counter = 1;
    else
      this.counter -= 1;
  }

  public checkCounter() {
    if(this.counter >= this.product.inicio_mayoreo) {
      this.current_price = this.product.precio_mayoreo
      if(this.counter >= this.product.inicio_caja) 
        this.current_price = this.product.precio_caja
    } 
    else
      this.current_price = this.product.precio_unitario
  }

  public actionsBtn(increment: boolean) {
    if (increment == true)
      this.incrementCounter();
    else
      this.decrementCounter();

    this.checkCounter();
  }

  public addToCart() {
    const id_cart = localStorage.getItem('carrito') || '0'
    const data = {
      id_producto: parseInt(this.id_product),
      id_carrito: parseInt(id_cart),
      cantidad_producto: this.counter
    }
    
    this.cartService.addProductToCart(data).subscribe( () => {
      this.transferDataLocalService.quantity += 1
      this.transferDataLocalService.emitQuantityToCart()
    })
  }
}

