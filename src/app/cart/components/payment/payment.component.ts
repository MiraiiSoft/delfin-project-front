import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderData } from '../../interfaces/payment.interface';
import { PaymentService } from '../../services/services-payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  logoMercadoPago = "assets/img/logos/mercado-pago.png";
  logoPaypal = "assets/img/logos/paypal.png";

  constructor( @Inject(MAT_DIALOG_DATA) public data: OrderData, 
    private paymentService: PaymentService // Inyecta el servicio PaymentService 
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  proceedToPayment( payService: string ){
    this.data.payservice = payService;

    this.paymentService.iniciarPago(this.data).subscribe(
      response => {
        window.location.href = response.message.links[1].href;
      }
    );
  }

}
