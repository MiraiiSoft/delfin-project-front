import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartOne, UpdateCarritoProducto } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private urlBase = environment.API_URL;

  constructor(private http:HttpClient) { }

  getCartById( id:string ) {
    const url = `${ this.urlBase }/shoppingcart/${ id }`
    return this.http.get<CartOne>( url ).pipe(
      catchError( e => of( e.error ) )
    )
  }

  updateCartById(id: string, body:UpdateCarritoProducto) {
    const url = `${this.urlBase}/shoppingCart/update/${id}` 
    return this.http.put<UpdateCarritoProducto>(url, body).pipe(
      catchError( e => of( e.error ) )
    )
  }

  deleteCartById(id: string) {
    const url = `${this.urlBase}/shoppingCart/delete/${id}`
    return this.http.delete( url ).pipe( 
      catchError( e => of(e.error) )
    )
  }
   
}
