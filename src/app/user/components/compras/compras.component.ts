import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  compras = [
    {
      id: 1,
      venta: {
        id_venta: 1,
        fecha_venta: "2023-07-01T00:00:00.000Z",
        status_venta: "Completada",
        id_envio: 1,
        id_pago: 1,
        pago: {
          id_pago: 1,
          tocken_pago: "tok_123",
          monto: "100"
        },
        envio: {
          id_envio: 1,
          id_login: 2,
          fecha_envio: "2023-07-01T00:00:00.000Z",
          fecha_entrega: "2023-08-05T00:00:00.000Z",
          fecha_recoleccion: "2023-07-10T00:00:00.000Z",
          paqueteria: "FedEx",
          status_envio: "En tránsito"
        }
      },
      login: {
        id_login: 1,
        correo: "juan@example.com",
        usuario: "juan123",
        password: "password1",
        is_verified: false,
        id_persona: 1,
        id_roll: 1,
        is_active: false,
        persona: {
          id_persona: 1,
          nombre: "Juan",
          apellido: "Pérez",
          telefono: "555-1234",
          id_direccion: 1
        }
      },
      producto: [
        {
          id_producto: 1,
          codigo_barras: "1234567890",
          nombre: "Bolígrafo Azul",
          marca: "Marca A",
          descripcion: "Bolígrafo de tinta azul",
          imagen: {
            url: [
              "https://escritoriomoderno.com.mx/cdn/shop/products/metricodixon_580x.jpg?v=1628636286"
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
          id_tipo: 1
        }
      ]
    }
  ]

}
