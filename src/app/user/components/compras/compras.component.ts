import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { IShopping } from '../../interfaces/shopping.interface';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  $user!: Subscription;
  compras = [
    {
      id: 0,
      venta: {
        id_venta: 0,
        fecha_venta: "",
        status_venta: "",
        id_envio: 0,
        id_pago: 0,
        pago: {
          id_pago: 0,
          tocken_pago: "",
          monto: ""
        },
        envio: {
          id_envio: 0,
          id_login: 0,
          fecha_envio: "",
          fecha_entrega: "",
          fecha_recoleccion: "",
          paqueteria: "",
          status_envio: ""
        }
      },
      login: {
        id_login: 0,
        correo: "",
        usuario: "",
        password: "",
        is_verified: false,
        id_persona: 0,
        id_roll: 0,
        is_active: false
      },
      producto: [
        {
          id_producto: 0,
          codigo_barras: "",
          nombre: "",
          marca: "",
          descripcion: "",
          imagen: {
            url: []
          },
          compra: "",
          precio_unitario: "",
          precio_mayoreo: "",
          precio_caja: "",
          inicio_mayoreo: 0,
          inicio_caja: 0,
          id_color: 0,
          id_categoria: 0,
          id_tipo: 0,
          cantidad_producto: 0
        },
      ],
      monto_total: ""
    },
  ]

  constructor( private dialog: MatDialog, userService: UserService ) { 

    this.$user = userService.getPerfil().subscribe( res => {

      if ( res.data ) {
        const { id_login } = res.data

        userService.getVentasById_login( id_login ).subscribe( resVentas => {
          this.compras = resVentas.data
        })
      }
      
    })
  }
  
  ngOnInit(): void {

  }

  openSpinner(){
    this.dialog.open( SpinnerComponent, {
      disableClose: true
    } );
  }

  closeSpinner(){
    this.dialog.closeAll();
  }

}
