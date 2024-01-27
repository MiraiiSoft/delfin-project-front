import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OrderData } from '../../interfaces/payment.interface';
import { PaymentService } from '../../services/services-payment.service';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { mensajeError } from 'src/app/utils/alertSwal';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  logoMercadoPago = "assets/img/logos/mercado-pago.png";
  logoPaypal = "assets/img/logos/paypal.png";

  constructor( @Inject(MAT_DIALOG_DATA) public data: OrderData,
    private paymentService: PaymentService, // Inyecta el servicio PaymentService
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  proceedToPayment( payService: string ){
    this.openSpinner();
    this.data.payservice = payService;

    this.paymentService.iniciarPago(this.data).subscribe(
      response => {
        this.closeSpinner();
        if(!response.success) {
          mensajeError(response.message || "")
        }else{
          window.location.href = response.data.payUrl
        }
      }
    );
  }

  openSpinner(){
    this.dialog.open( SpinnerComponent, {
      disableClose: true
    } )
  }

  closeSpinner(){
    this.dialog.closeAll();
  }

}
