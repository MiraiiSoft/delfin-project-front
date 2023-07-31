import { Component, OnInit } from '@angular/core';
import { CartOne, UpdateCarritoProducto } from '../../interfaces/cart.interface';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  id: string = ""
  public current_price: any = [];
  public total_price = 0;
  public total_products = 0;
  cart: CartOne = {
    id_carrito: 1,
    id_login: 1,
    carrito_producto: [
      {
        id_carrito_producto: 1,
        id_producto: 1,
        id_carrito: 2,
        cantidad_producto: 1,
        producto: {
          id_producto: 1,
          codigo_barras: "1234567890",
          nombre: "Kit Plumas Lapiceros Bic Dura+ Punto Mediano 1 Mm 36 Piezas ",
          marca: "Bic",
          descripcion: "Pluma Bolígarfo BIC Cláscio Dura + de Trazo Mediano Punto de Aguja 1 mm con tinta de baja viscosidad que brinda un flujo de tinta instantáneo, haciendo que la escritura sea suave, continua, con colores nítidos y brillantes.",
          imagen: {
            url: [ "assets/img/products/img1.png", 
            "assets/img/products/img1.png"
            ]
          },
          compra: "5",
          precio_unitario: "45.80",
          precio_mayoreo: "40.00",
          precio_caja: "35.99",
          inicio_mayoreo: 3,
          inicio_caja: 5,
          id_color: 2,
          id_categoria: 1,
          id_tipo: 1,
          tipo: {
            id_tipo: 1,
            tipo: "Caja"
          },
          inventario: [
            {
              id_inventario: 1,
              id_producto: 1,
              existencias: 7,
              unidadesPaquete: 4,
              numPaquete: 20
            }
          ],
          color: {
            id_color: 1,
            color: "Rojo",
            hexa: "#ff0000"
          }
        }
      },
      {
        id_carrito_producto: 1,
        id_producto: 2,
        id_carrito: 2,
        cantidad_producto: 1,
        producto: {
          id_producto: 1,
          codigo_barras: "1234567890",
          nombre: "Kit Plumas Lapiceros Bic Dura+ Punto Mediano 1 Mm 36 Piezas ",
          marca: "Bic",
          descripcion: "Pluma Bolígarfo BIC Cláscio Dura + de Trazo Mediano Punto de Aguja 1 mm con tinta de baja viscosidad que brinda un flujo de tinta instantáneo, haciendo que la escritura sea suave, continua, con colores nítidos y brillantes.",
          imagen: {
            url: [ "assets/img/products/img1.png", 
            "assets/img/products/img1.png"
            ]
          },
          compra: "5",
          precio_unitario: "45.80",
          precio_mayoreo: "40.00",
          precio_caja: "35.99",
          inicio_mayoreo: 3,
          inicio_caja: 5,
          id_color: 2,
          id_categoria: 1,
          id_tipo: 1,
          tipo: {
            id_tipo: 1,
            tipo: "Caja"
          },
          inventario: [
            {
              id_inventario: 1,
              id_producto: 1,
              existencias: 7,
              unidadesPaquete: 4,
              numPaquete: 20
            }
          ],
          color: {
            id_color: 1,
            color: "Rojo",
            hexa: "#ff0000"
          }
        }
      },
    ]
  }

  constructor(private activatedRoute:ActivatedRoute, public cartService: CartService, private router:Router) {
    this.activatedRoute.paramMap.subscribe(link => {
      this.id = String( link.get('cartId') )
    })

    cartService.getCartById(this.id).subscribe( data => {
      this.cart = data.data
      this.cart.carrito_producto.forEach( (carrito_producto, i) => {
        this.total_products += carrito_producto.cantidad_producto;
        this.current_price.push(0);
        this.checkCounter(i, carrito_producto.producto)
        this.refreshTotalPrice()
      });
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.cart.carrito_producto.forEach( carrito_producto => {
      const { id_carrito_producto, id_carrito, id_producto, cantidad_producto } = carrito_producto
      
      this.cartService.updateCartById( String(id_carrito_producto), carrito_producto ).subscribe( data => {
        console.log(data)
      })
    });
  } 
  
  public incrementCounter(index: any, product: any) {
    if(this.cart.carrito_producto[index].cantidad_producto == product.inventario.existencias)
      this.cart.carrito_producto[index].cantidad_producto = product.inventario.existencias
    else
      this.cart.carrito_producto[index].cantidad_producto += 1;
  }

  public decrementCounter(index: any) {
    if(this.cart.carrito_producto[index].cantidad_producto <= 1) 
      this.cart.carrito_producto[index].cantidad_producto = 1;
    else
      this.cart.carrito_producto[index].cantidad_producto -= 1;
  }

  public checkCounter(index: any, product: any) {
    if(this.cart.carrito_producto[index].cantidad_producto >= product.inicio_mayoreo) {
      this.current_price[index] = product.precio_mayoreo
      if(this.cart.carrito_producto[index].cantidad_producto >= product.inicio_caja) 
        this.current_price[index] = product.precio_caja
    } 
    else
      this.current_price[index] = product.precio_unitario
  }

  public refreshTotalPrice() {
    this.total_price = 0;
    for (let index = 0; index < this.cart.carrito_producto.length; index++) {
      this.total_price += this.current_price[index] * this.cart.carrito_producto[index].cantidad_producto
    }
    this.total_price = parseFloat(this.total_price.toFixed(2))
  }

  public refreshTotalProducts() {
    this.total_products = 0;
    this.cart.carrito_producto.forEach((element: any) => {
      this.total_products += element.cantidad_producto
    });
  }

  public actionsBtn(index: any, increment: boolean) {
    const product = this.cart.carrito_producto[index].producto
    if( increment == true )
      this.incrementCounter(index, product)
    else
      this.decrementCounter(index)

    this.checkCounter(index, product)
    this.refreshTotalPrice()
    this.refreshTotalProducts()
  }

  public appendQueryParams(id: number) {
    this.router.navigate(['/site/products/detail'],{
      queryParams: {
        product: id
      }
    });
  }

}
