import { Component, OnInit } from '@angular/core';
import { ICartOne } from '../../interfaces/cart.interface';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferDataLocalService } from 'src/app/services/transfer-data-local.service';
import { PaymentService } from '../../services/services-payment.service';
import { OrderData } from '../../interfaces/payment.interface';
import { Item,Product } from '../../interfaces/payment.interface';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  id: string = ""
  public current_price: number[] = []
  public total_price = 0
  public total_allProducts = 0
  ArrayExist: any = []

  cart: ICartOne = {
    id_carrito: 0,
    id_login: 0,
    carrito_producto: []
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    public cartService: CartService,
    public transferDataLocalService: TransferDataLocalService,
    private router: Router,
    private paymentService: PaymentService // Inyecta el servicio PaymentService
  ) {
    this.activatedRoute.paramMap.subscribe(link => {
      this.id = String( link.get('cartId') )
    })

    this.cartService.getCartById(this.id).subscribe( data => {
      this.cart = data.data

      this.reloadCart()
    })

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.cart.carrito_producto.forEach( carrito_producto => {
      const { id_carrito_producto } = carrito_producto
      this.cartService.updateCartProductById( String(id_carrito_producto), carrito_producto ).subscribe()
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

  

  public refreshTotalPrice() {
    this.total_price = 0;
    for (let index = 0; index < this.cart.carrito_producto.length; index++) {
      this.total_price += this.current_price[index] * this.cart.carrito_producto[index].cantidad_producto
    }
    this.total_price = parseFloat(this.total_price.toFixed(2))
  }

  public refreshTotalProducts() {
    this.total_allProducts = 0;
    this.cart.carrito_producto.forEach((element: any) => {
      this.total_allProducts += element.cantidad_producto
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

  public checkCounter(i: any, product: any) {
    const counter = this.cart.carrito_producto[i].cantidad_producto

    if ( counter < product.inicio_mayoreo && counter < product.inicio_caja ) {

      if ( this.ArrayExist[i].unitPrice ) {
        this.current_price[i] = product.precio_unitario

      } else {
        if ( this.ArrayExist[i].wholeSalePrice ) {
          this.current_price[i] = product.precio_mayoreo

        } else {
          if ( this.ArrayExist[i].boxPrice ) {
            this.current_price[i] = product.precio_caja

          }
        }
      }

    } else {

      if ( counter >= product.inicio_mayoreo && counter < product.inicio_caja ) {

        if ( this.ArrayExist[i].wholeSalePrice ) {
          this.current_price[i] = product.precio_mayoreo

        } else {
          if ( this.ArrayExist[i].unitPrice ) {
            this.current_price[i] = product.precio_unitario

          } else {
            if ( this.ArrayExist[i].boxPrice ) {
              this.current_price[i] = product.precio_caja

            }
          }
        }

      } else {

        if ( counter > product.inicio_mayoreo && counter >= product.inicio_caja ) {

          if ( this.ArrayExist[i].boxPrice ) {
            this.current_price[i] = product.precio_caja

          } else {
            if ( this.ArrayExist[i].unitPrice ) {
              this.current_price[i] = product.precio_unitario

            } else {
              if ( this.ArrayExist[i].wholeSalePrice ) {
                this.current_price[i] = product.precio_mayoreo

              }
            }
          }

        }

      }

    }

  }

  public deleteProduct(id: any) {
    const idToRemove = this.cart.carrito_producto[id].id_carrito_producto

    this.cartService.deleteProductOfCart( String( idToRemove ) ).subscribe( () => {

      this.cartService.getCartById(this.id).subscribe( res => {
        const { success, data } = res

        if ( success == true ) {
          this.cart = data

          this.reloadCart()
          this.transferDataLocalService.quantity -= 1
          this.transferDataLocalService.emitQuantityToCart()
        }

      })

    })
  }

  reloadCart() {
    for (let index = 0; index < this.cart.carrito_producto.length; index++) {
      const product = this.cart.carrito_producto[index].producto
      let newObjExist: any = {}
      newObjExist.unitPrice = false
      newObjExist.wholeSalePrice = false
      newObjExist.boxPrice = false

      if( product.precio_caja != null ) {
        this.current_price[index] = parseInt( product.precio_caja )
        newObjExist.boxPrice = true
      }

      if( product.precio_mayoreo != null ) {
        this.current_price[index] = parseInt( product.precio_mayoreo )
        newObjExist.wholeSalePrice = true
      }

      if( product.precio_unitario != null ) {
        this.current_price[index] = parseInt( product.precio_unitario )
        newObjExist.unitPrice = true
      }

      this.ArrayExist.push(newObjExist)
    }

    this.cart.carrito_producto.forEach( (carrito_producto, i) => {
      this.total_allProducts += carrito_producto.cantidad_producto
      this.current_price.push(0)
      this.checkCounter(i, carrito_producto.producto)
      this.refreshTotalPrice()
    })
  }

  public proceedToPayment() {
    const items: Item[] = this.cart.carrito_producto.map(carrito_producto => {
      const { producto, cantidad_producto } = carrito_producto;
      return {
        title: "productos",
        unit_price: Number(producto.precio_unitario),
        currency_id: 'MXN',
        quantity: cantidad_producto,
      };
    });

    const products: Product[] = this.cart.carrito_producto.map(carrito_producto => {
      const { producto, cantidad_producto } = carrito_producto;
      const monto_total = Number(producto.precio_unitario) * cantidad_producto;
      return {
        id_producto: producto.id_producto,
        cantidad_producto: cantidad_producto,
        monto_total: monto_total,
      };
    });

    const orderData: OrderData = {
      payservice: 'paypal',
      items: items,
      products: products,
      envio: {
        paqueteria: 'DHL'
      }
    };

    this.paymentService.iniciarPago(orderData).subscribe(
      response => {
        window.location.href = response.message.links[1].href;
      },
      error => {
        console.log(error);
      }
    );
  }




  public appendQueryParams(id: number) {
    this.router.navigate(['/site/products/detail'],{
      queryParams: {
        product: id
      }
    });
  }

}
