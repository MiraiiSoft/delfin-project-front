import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderData } from '../interfaces/payment.interface';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = `${environment.API_URL}/payment/create-order`; // Utiliza la variable de entorno para completar la URL

  constructor(private http: HttpClient) {}

  iniciarPago(paymentRequestData: OrderData): Observable<any> {
    const headers = new HttpHeaders()
    .set("token",localStorage.getItem('token') || '');

    return this.http.post<any>(this.apiUrl, paymentRequestData,{headers});
  }
}
