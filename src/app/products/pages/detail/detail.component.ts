import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
  value = 'Clear me';
  public indexSelected = 0;
  public imgSelected: string = "";
  public counter = 1;

  product: any = {
    id_producto: 1,
    codigo_barras: "1234567890",
    nombre: "Kit Plumas Lapiceros Bic Dura+ Punto Mediano 1 Mm 36 Piezas ",
    marca: "Bic",
    descripcion: "Pluma Bolígarfo BIC Cláscio Dura + de Trazo Mediano Punto de Aguja 1 mm con tinta de baja viscosidad que brinda un flujo de tinta instantáneo, haciendo que la escritura sea suave, continua, con colores nítidos y brillantes.",
    imagen: {
      url: [
        "assets/img/products/img1.png",
        "assets/img/products/img2.png",
        "assets/img/products/img3.png",
        "assets/img/products/img4.png",
        "assets/img/products/img1.png",
        "assets/img/products/img2.png",
        "assets/img/products/img3.png",
        "assets/img/products/img1.png",
        "assets/img/products/img2.png",
        "assets/img/products/img3.png",
        "assets/img/products/img4.png",
        "assets/img/products/img1.png",
        "assets/img/products/img2.png",
      ]
    },
    compra: "5",
    precio_unitario: "42.00",
    precio_mayoreo: "7",
    precio_caja: "5",
    inicio_mayoreo: 10,
    inicio_caja: 20,
    id_color: 2,
    id_categoria: 1,
    id_tipo: 1,
    color: [
      { 
        id_color: 1,
        color: "Blanco",
        hexa: "##ffffff"
      },
      { 
        id_color: 2,
        color: "Rojo",
        hexa: "#ff0000"
      },
      { 
        id_color: 2,
        color: "Negro",
        hexa: "#000000"
      },

      { 
        id_color: 2,
        color: "negro",
        hexa: "#000000"
      },
      { 
        id_color: 2,
        color: "negro",
        hexa: "#000000"
      },
      { 
        id_color: 2,
        color: "negro",
        hexa: "#000000"
      },
      { 
        id_color: 2,
        color: "negro",
        hexa: "#000000"
      },
      { 
        id_color: 2,
        color: "negro",
        hexa: "#000000"
      }
    ],
    tipo: {
      id_tipo: 1,
      tipo: "Paquete"
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
  }
  
  constructor() { }

  public selectImg(index: any) {
    this.indexSelected = index;
    this.imgSelected = this.product.imagen.url[index];
  }

  public incrementCounter() {
    if(this.counter == this.product.inventario.existencias)
      this.counter = this.product.inventario.existencias
    else
      this.counter += 1;
  }

  public decrementCounter() {
    if(this.counter <= 1) 
      this.counter = 1;
    else
      this.counter -= 1;
  }

  ngOnInit(): void {
    if(this.product.imagen.url.length >= 0){
      this.selectImg(0);
    }
  }
}

