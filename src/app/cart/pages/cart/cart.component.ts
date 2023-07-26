import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  public counter: any = [];
  public current_price: any = [];
  cart: any = {
    id_carrito: 1,
    detalle_venta: [
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
        precio_unitario: "42.00",
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
        categoria: {
          id_categoria: 1,
          categoria: "Lapiceros"
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
        precio_unitario: "52.00",
        precio_mayoreo: "30.00",
        precio_caja: "25.99",
        inicio_mayoreo: 3,
        inicio_caja: 5,
        id_color: 2,
        id_categoria: 1,
        id_tipo: 1,
        color: {
          color: "Verde"
        },
        tipo: {
          tipo: "Empaque"
        },
        categoria: {
          id_categoria: 1,
          categoria: "Lapiceros"
        },
        inventario: {
          id_inventario: 1,
          id_producto: 1,
          existencias: 10,
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
        precio_unitario: "52.00",
        precio_mayoreo: "30.00",
        precio_caja: "25.99",
        inicio_mayoreo: 3,
        inicio_caja: 5,
        id_color: 2,
        id_categoria: 1,
        id_tipo: 1,
        color: {
          color: "Verde"
        },
        tipo: {
          tipo: "Empaque"
        },
        categoria: {
          id_categoria: 1,
          categoria: "Lapiceros"
        },
        inventario: {
          id_inventario: 1,
          id_producto: 1,
          existencias: 10,
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
        precio_unitario: "52.00",
        precio_mayoreo: "30.00",
        precio_caja: "25.99",
        inicio_mayoreo: 3,
        inicio_caja: 5,
        id_color: 2,
        id_categoria: 1,
        id_tipo: 1,
        color: {
          color: "Verde"
        },
        tipo: {
          tipo: "Empaque"
        },
        categoria: {
          id_categoria: 1,
          categoria: "Lapiceros"
        },
        inventario: {
          id_inventario: 1,
          id_producto: 1,
          existencias: 10,
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
        precio_unitario: "52.00",
        precio_mayoreo: "30.00",
        precio_caja: "25.99",
        inicio_mayoreo: 3,
        inicio_caja: 5,
        id_color: 2,
        id_categoria: 1,
        id_tipo: 1,
        color: {
          color: "Verde"
        },
        tipo: {
          tipo: "Empaque"
        },
        categoria: {
          id_categoria: 1,
          categoria: "Lapiceros"
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

  constructor() {
    for (let index = 0; index < this.cart.detalle_venta.length; index++) {
      const element = this.cart.detalle_venta[index];
      this.counter.push(1);
      this.current_price.push(element.precio_unitario);
    }
  }

  public incrementCounter(index: any) {
    if(this.counter[index] == this.cart.detalle_venta[index].inventario.existencias)
      this.counter[index] = this.cart.detalle_venta[index].inventario.existencias
    else
      this.counter[index] += 1;
  }

  public decrementCounter(index: any) {
    if(this.counter[index] <= 1) 
      this.counter[index] = 1;
    else
      this.counter[index] -= 1;
  }

  public checkCounter(index: any) {
    if(this.counter[index] >= this.cart.detalle_venta[index].inicio_mayoreo) {
      this.current_price[index] = this.cart.detalle_venta[index].precio_mayoreo
      if(this.counter[index] >= this.cart.detalle_venta[index].inicio_caja) 
        this.current_price[index] = this.cart.detalle_venta[index].precio_caja
    } 
    else
      this.current_price[index] = this.cart.detalle_venta[index].precio_unitario
  }

  public actionsBtnIncrement(index: any) {
    this.incrementCounter(index);
    this.checkCounter(index);
  }

  public actionsBtnDecrement(index: any) {
    this.decrementCounter(index);
  }

  ngOnInit(): void {
  }

}
