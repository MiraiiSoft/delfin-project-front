import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
  public indexSelected = 0;
  public imgSelected: string = "";

  product: any = {
    id_producto: 1,
    codigo_barras: "1234567890",
    nombre: "Bolígrafo Azul",
    marca: "Marca A",
    descripcion: "Bolígrafo de tinta azul",
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
    precio_unitario: "8",
    precio_mayoreo: "7",
    precio_caja: "5",
    inicio_mayoreo: 10,
    inicio_caja: 20,
    id_color: 2,
    id_categoria: 1,
    id_tipo: 1,
    color: {
      id_color: 2,
      color: "Azul",
      hexa: "#0000FF"
    }
  }
  
  constructor() { }

  public selectImg(index: any) {
    this.indexSelected = index;
    this.imgSelected = this.product.imagen.url[index];
  }

  ngOnInit(): void {
    if(this.product.imagen.url.length >= 0){
      this.selectImg(0);
    }
    
  }

  

}

