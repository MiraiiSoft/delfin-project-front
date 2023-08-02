import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResProductos } from '../interfaces/producto.interface';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlBase = environment.API_URL;

  constructor(private http:HttpClient) { }

  getProductos(): Observable<IResProductos> {
    const url = `${this.urlBase}/producto`
    return this.http.get<IResProductos>(url).pipe(
      catchError (e => of(e.error))
    )
  }

}
