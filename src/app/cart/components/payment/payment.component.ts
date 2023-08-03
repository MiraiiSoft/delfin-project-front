import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  logoMercadoPago = "assets/img/logos/mercado-pago.png";
  logoPaypal = "assets/img/logos/paypal.png";

  constructor() { }

  ngOnInit(): void {
  }

}
