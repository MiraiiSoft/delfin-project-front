import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../interfaces/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selected: string = ''
  categoryPanel: boolean = false;
  colorPanel: boolean = false;
  brandPanel: boolean = false;

  products: Products[] = [
    {
      id_producto: 1,
      codigo_barras: "1234567890",
      nombre: "Kit Plumas Lapiceros Bic Dura+ Punto Mediano 1 Mm 36 Piezas ",
      marca: "Marca A",
      descripcion: "Bolígrafo de tinta azul",
      imagen: {
        url: [
          '/assets/img/products/img1.png', '/assets/img/products/img1.png'
        ]
      },
      compra: "5",
      precio_unitario: "569",
      precio_mayoreo: "7",
      precio_caja: "5",
      inicio_mayoreo: 10,
      inicio_caja: 20,
      id_color: 2,
      id_categoria: 1,
      id_tipo: 1,
      inventario: [
        {
          id_inventario: 1,
          id_producto: 1,
          existencias: 100,
          unidadesPaquete: 10,
          numPaquete: 5
        }
      ]
    },
    {
      id_producto: 2,
      codigo_barras: "1234567890",
      nombre: "Bolígrafo Azul",
      marca: "Marca A",
      descripcion: "Bolígrafo de tinta azul",
      imagen: {
        url: [
          '/assets/img/products/img3.png', '/assets/img/products/img1.png'
        ]
      },
      compra: "5",
      precio_unitario: "321",
      precio_mayoreo: "7",
      precio_caja: "5",
      inicio_mayoreo: 10,
      inicio_caja: 20,
      id_color: 2,
      id_categoria: 1,
      id_tipo: 1,
      inventario: [
        {
          id_inventario: 1,
          id_producto: 1,
          existencias: 100,
          unidadesPaquete: 10,
          numPaquete: 5
        }
      ]
    },
    {
      id_producto: 3,
      codigo_barras: "1234567890",
      nombre: "Kit Plumas Lapiceros Bic Dura+ Punto Mediano 1 Mm 36 Piezas ",
      marca: "Marca A",
      descripcion: "Bolígrafo de tinta azul",
      imagen: {
        url: [
          '/assets/img/products/img1.png', '/assets/img/products/img1.png'
        ]
      },
      compra: "5",
      precio_unitario: "569",
      precio_mayoreo: "7",
      precio_caja: "5",
      inicio_mayoreo: 10,
      inicio_caja: 20,
      id_color: 2,
      id_categoria: 1,
      id_tipo: 1,
      inventario: [
        {
          id_inventario: 1,
          id_producto: 1,
          existencias: 100,
          unidadesPaquete: 10,
          numPaquete: 5
        }
      ]
    },
    {
      id_producto: 4,
      codigo_barras: "1234567890",
      nombre: "Kit Plumas Lapiceros Bic Dura+ Punto Mediano 1 Mm 36 Piezas ",
      marca: "Marca A",
      descripcion: "Bolígrafo de tinta azul",
      imagen: {
        url: [
          '/assets/img/products/img1.png', '/assets/img/products/img1.png'
        ]
      },
      compra: "5",
      precio_unitario: "569",
      precio_mayoreo: "7",
      precio_caja: "5",
      inicio_mayoreo: 10,
      inicio_caja: 20,
      id_color: 2,
      id_categoria: 1,
      id_tipo: 1,
      inventario: [
        {
          id_inventario: 1,
          id_producto: 1,
          existencias: 100,
          unidadesPaquete: 10,
          numPaquete: 5
        }
      ]
    },
    {
      id_producto: 5,
      codigo_barras: "1234567890",
      nombre: "Kit Plumas Lapiceros Bic Dura+ Punto Mediano 1 Mm 36 Piezas ",
      marca: "Marca A",
      descripcion: "Bolígrafo de tinta azul",
      imagen: {
        url: [
          '/assets/img/products/img2.png', '/assets/img/products/img1.png'
        ]
      },
      compra: "5",
      precio_unitario: "569",
      precio_mayoreo: "7",
      precio_caja: "5",
      inicio_mayoreo: 10,
      inicio_caja: 20,
      id_color: 2,
      id_categoria: 1,
      id_tipo: 1,
      inventario: [
        {
          id_inventario: 1,
          id_producto: 1,
          existencias: 100,
          unidadesPaquete: 10,
          numPaquete: 5
        }
      ]
    },
    {
      id_producto: 6,
      codigo_barras: "1234567890",
      nombre: "Kit Plumas Lapiceros Bic Dura+ Punto Mediano 1 Mm 36 Piezas ",
      marca: "Marca A",
      descripcion: "Bolígrafo de tinta azul",
      imagen: {
        url: [
          '/assets/img/products/img3.png', '/assets/img/products/img1.png'
        ]
      },
      compra: "5",
      precio_unitario: "1000",
      precio_mayoreo: "7",
      precio_caja: "5",
      inicio_mayoreo: 10,
      inicio_caja: 20,
      id_color: 2,
      id_categoria: 1,
      id_tipo: 1,
      inventario: [
        {
          id_inventario: 1,
          id_producto: 1,
          existencias: 100,
          unidadesPaquete: 10,
          numPaquete: 5
        }
      ]
    },
    {
      id_producto: 7,
      codigo_barras: "1234567890",
      nombre: "Kit Plumas Lapiceros Bic Dura+ Punto Mediano 1 Mm 36 Piezas ",
      marca: "Marca A",
      descripcion: "Bolígrafo de tinta azul",
      imagen: {
        url: [
          '/assets/img/products/img1.png', '/assets/img/products/img1.png'
        ]
      },
      compra: "5",
      precio_unitario: "569",
      precio_mayoreo: "7",
      precio_caja: "5",
      inicio_mayoreo: 10,
      inicio_caja: 20,
      id_color: 2,
      id_categoria: 1,
      id_tipo: 1,
      inventario: [
        {
          id_inventario: 1,
          id_producto: 1,
          existencias: 100,
          unidadesPaquete: 10,
          numPaquete: 5
        }
      ]
    },
    {
      id_producto: 8,
      codigo_barras: "1234567890",
      nombre: "Kit Plumas Lapiceros Bic Dura+ Punto Mediano 1 Mm 36 Piezas ",
      marca: "Marca A",
      descripcion: "Bolígrafo de tinta azul",
      imagen: {
        url: [
          '/assets/img/products/img1.png', '/assets/img/products/img1.png'
        ]
      },
      compra: "5",
      precio_unitario: "569",
      precio_mayoreo: "7",
      precio_caja: "5",
      inicio_mayoreo: 10,
      inicio_caja: 20,
      id_color: 2,
      id_categoria: 1,
      id_tipo: 1,
      inventario: [
        {
          id_inventario: 1,
          id_producto: 1,
          existencias: 100,
          unidadesPaquete: 10,
          numPaquete: 5
        }
      ]
    },
  ]

  categories: any = [
    {
      id_categoria: 1,
      categoria: "Lapiceros"
    },
    {
      id_categoria: 1,
      categoria: "Gomas"
    },
    {
      id_categoria: 1,
      categoria: "Tijeras"
    },
    {
      id_categoria: 1,
      categoria: "Libretas"
    }
  ]

  colors: any = [
    {
      id_color: 1,
      color: 'Blanco',
      hexa: '#fffffff'
    },
    {
      id_color: 2,
      color: 'Blanco',
      hexa: '#fffffff'
    },
    {
      id_color: 3,
      color: 'Blanco',
      hexa: '#fffffff'
    },
  ]

  brands: any = [
    'Bic',
    'Marca 2',
    'Marca 3'
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public openDetailPage(id: number) {
    this.router.navigate(['/site/products/detail'],{
      queryParams: {
        product: id
      }
    });
  }

}
