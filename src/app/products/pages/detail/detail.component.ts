import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public indexSelected = 0
  public imgSelected: string = ""
  public counter = 1;
  public current_price: string = ""
  unitPrice: boolean = false
  wholeSalePrice: boolean = false
  boxPrice: boolean = false
  executed: boolean = false

  product: IOneProduct = {
    id_producto: 0,
    codigo_barras: "",
    nombre: "",
    marca: "",
    descripcion: "",
    imagen: {
      url: []
    },
    compra: "5",
    precio_unitario: "00",
    precio_mayoreo: "00",
    precio_caja: "00",
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
  
  constructor(private productService: ProductosService, public cartService:CartService, public transferDataLocalService: TransferDataLocalService, private activateRoute: ActivatedRoute, public router: Router ) {
    this.id_product = this.activateRoute.snapshot.queryParamMap.get('product') || '0'

    this.productService.getOneProduct( parseInt(this.id_product) ).subscribe( res => {
      this.product = res.data
      
      if(this.product.imagen.url.length >= 0){
        this.selectImg(0);
      }

      if( this.product.precio_caja != null ) {
        this.putPrice(this.product.precio_caja)
        this.boxPrice = true
      }

      if( this.product.precio_mayoreo != null ) {
        this.putPrice(this.product.precio_mayoreo)
        this.wholeSalePrice = true
      } 

      if( this.product.precio_unitario != null ) {
        this.putPrice(this.product.precio_unitario)
        this.unitPrice = true
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

    if ( this.counter < this.product.inicio_mayoreo && this.counter < this.product.inicio_caja ) {
      
      if ( this.unitPrice ) {
        this.putPrice(this.product.precio_unitario)

      } else {
        if ( this.wholeSalePrice ) {
          this.putPrice(this.product.precio_mayoreo)

        } else {
          if ( this.boxPrice ) {
            this.putPrice(this.product.precio_caja)

          }
        }
      }

    } else {

      if ( this.counter >= this.product.inicio_mayoreo && this.counter < this.product.inicio_caja ) {
        
        if ( this.wholeSalePrice ) {
          this.putPrice(this.product.precio_mayoreo)

        } else {
          if ( this.unitPrice ) {
            this.putPrice(this.product.precio_unitario)

          } else {
            if ( this.boxPrice ) {
              this.putPrice(this.product.precio_caja)

            }
          }
        }

      } else {

        if ( this.counter > this.product.inicio_mayoreo && this.counter >= this.product.inicio_caja ) {
          
          if ( this.boxPrice ) {
            this.putPrice(this.product.precio_caja)

          } else {
            if ( this.unitPrice ) {
              this.putPrice(this.product.precio_unitario)

            } else {
              if ( this.wholeSalePrice ) {
                this.putPrice(this.product.precio_mayoreo)

              }
            }
          }

        }

      }

    }

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
    
    this.cartService.addProductToCart(data).subscribe( res => {
        const res_known:any = res

        if ( res_known.data != null ) {
          this.transferDataLocalService.quantity += 1
          this.transferDataLocalService.emitQuantityToCart()
        }
    })
  }

  putPrice(price: string) {
    this.current_price = parseFloat(price).toFixed(2)
  }

  public appendQueryParams( id:number ) {
    this.router.navigate(['/site/products'], {
      queryParams: {
        filter: 'category',
        value: id
      }
    })
  }
}

