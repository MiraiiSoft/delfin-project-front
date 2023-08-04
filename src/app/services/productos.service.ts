import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResOneProduct, IResProductos } from '../interfaces/producto.interface';
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

  getOneProduct( id:number ): Observable<IResOneProduct> {
    const url = `${this.urlBase}/producto/${ id }`
    return this.http.get<IResOneProduct>(url).pipe(
      catchError (e => of(e.error))
    )
  }

  getProductosPorCategoria (id: number): Observable<IResProductos>{
    const url = `${this.urlBase}/producto/categoria/${id}`
    return this.http.get<IResProductos>(url).pipe(
      catchError (e => of(e.error))
    )
  }
}
