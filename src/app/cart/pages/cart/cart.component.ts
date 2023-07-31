import { Component, OnInit } from '@angular/core';
import { CartOne } from '../../interfaces/cart.interface';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  id: string = ""
  public current_price: number[] = [];
  public total_price = 0;
  public total_products = 0;
  cart: CartOne = {
    id_carrito: 0,
    id_login: 0,
    carrito_producto: []
  }

  constructor(private activatedRoute:ActivatedRoute, public cartService: CartService, private router:Router) {
    this.activatedRoute.paramMap.subscribe(link => {
      this.id = String( link.get('cartId') )
    })

    cartService.getCartById(this.id).subscribe( data => {
      this.cart = data.data
      this.cart.carrito_producto.forEach( (carrito_producto, i) => {
        this.total_products += carrito_producto.cantidad_producto;
        this.current_price.push(0)
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
