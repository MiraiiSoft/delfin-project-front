import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  public counter: any = [];
  public current_price: any = [];
  public total_price = 0;
  public total_products = 0;
  cart: any = {
    id_carrito: 1,
    id_login: 1,
    carrito_producto: {
      id_carrito_producto: 1,
      id_producto: 1,
      id_carrito: 2,
      cantidad_producto: 1,
      producto: [
        {
          id_producto: 1,
          codigo_barras: "1234567890",
          nombre: "Kit Plumas Lapiceros Bic Dura+ Punto Mediano 1 Mm 36 Piezas ",
          marca: "Bic",
          descripcion: "Pluma Bolígarfo BIC Cláscio Dura + de Trazo Mediano Punto de Aguja 1 mm con tinta de baja viscosidad que brinda un flujo de tinta instantáneo, haciendo que la escritura sea suave, continua, con colores nítidos y brillantes.",
          imagen: {
            url: [
              "assets/img/products/img0.png",
              "assets/img/products/img2.png",
              "assets/img/products/img3.png",
              "assets/img/products/img4.png"
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
          color: {
            id_color: 1,
            color: "Rojo",
            hexa: "#ff0000"
          },
          tipo: {
            tipo: "Caja"
          },
          inventario: {
            id_inventario: 1,
            id_producto: 1,
            existencias: 7,
            unidadesPaquete: 4,
            numPaquete: 20
          }
        },
        {
          id_producto: 2,
          codigo_barras: "1234567890",
          nombre: "Kit Plumas Lapiceros Bic Dura+ Punto Mediano 1 Mm 36 Piezas ",
          marca: "Bic",
          descripcion: "Pluma Bolígarfo BIC Cláscio Dura + de Trazo Mediano Punto de Aguja 1 mm con tinta de baja viscosidad que brinda un flujo de tinta instantáneo, haciendo que la escritura sea suave, continua, con colores nítidos y brillantes.",
          imagen: {
            url: [
              "assets/img/products/img2.png",
              "assets/img/products/img3.png",
              "assets/img/products/img4.png"
            ]
          },
          compra: "5",
          precio_unitario: "20.00",
          precio_mayoreo: "16.00",
          precio_caja: "10.99",
          inicio_mayoreo: 3,
          inicio_caja: 5,
          id_color: 2,
          id_categoria: 1,
          id_tipo: 1,
          color: {
            id_color: 1,
            color: "Rojo",
            hexa: "#ff0000"
          },
          tipo: {
            id_tipo: 1,
            tipo: "Caja"
          },
          inventario: {
            id_inventario: 1,
            id_producto: 1,
            existencias: 10,
            unidadesPaquete: 4,
            numPaquete: 20
          }
        },
      ]
    }
  }

  constructor() {
    for (let index = 0; index < this.cart.carrito_producto.producto.length; index++) {
      const element = this.cart.carrito_producto.producto[index].precio_unitario;
      this.counter.push(1);
      this.current_price.push(element);
      this.total_price += parseInt(element);
      this.total_products += 1;
    }  
  }
  
  public incrementCounter(index: any, product: any) {
    if(this.counter[index] == product.inventario.existencias)
      this.counter[index] = product.inventario.existencias
    else
      this.counter[index] += 1;
  }

  public decrementCounter(index: any) {
    if(this.counter[index] <= 1) 
      this.counter[index] = 1;
    else
      this.counter[index] -= 1;
  }

  public checkCounter(index: any, product: any) {
    if(this.counter[index] >= product.inicio_mayoreo) {
      this.current_price[index] = product.precio_mayoreo
      if(this.counter[index] >= product.inicio_caja) 
        this.current_price[index] = product.precio_caja
    } 
    else
      this.current_price[index] = product.precio_unitario
  }

  public refreshTotalPrice() {
    this.total_price = 0;
    for (let index = 0; index < this.counter.length; index++) {
      this.total_price += this.current_price[index] * this.counter[index]
    }
    this.total_price = parseFloat(this.total_price.toFixed(2))
  }

  public refreshTotalProducts() {
    this.total_products = 0;
    this.counter.forEach((element: any) => {
      this.total_products += element
    });
  }

  public actionsBtn(index: any, increment: boolean) {
    const product = this.cart.carrito_producto.producto[index]
    if( increment == true )
      this.incrementCounter(index, product)
    else
      this.decrementCounter(index)

    this.checkCounter(index, product)
    this.refreshTotalPrice()
    this.refreshTotalProducts()
  }

  ngOnInit(): void {
  }

}
