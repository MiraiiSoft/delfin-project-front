import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAddProductToCart, ICartOneRes, IUpdateCarritoProducto } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private urlBase = environment.API_URL;

  constructor(private http:HttpClient) { }

  getCartById( id:string ) {
    const url = `${ this.urlBase }/shoppingcart/${ id }`
    return this.http.get<ICartOneRes>( url ).pipe(
      catchError( e => of( e.error ) )
    )
  }

  updateCartProductById(id: string, body:IUpdateCarritoProducto) {
    const url = `${this.urlBase}/shoppingCart/update/${id}` 
    return this.http.put<IUpdateCarritoProducto>(url, body).pipe(
      catchError( e => of( e.error ) )
    )
  }

  deleteCartById(id: string) {
    const url = `${this.urlBase}/shoppingCart/delete/${id}`
    return this.http.delete( url ).pipe( 
      catchError( e => of(e.error) )
    )
  }

  addProductToCart(body: IAddProductToCart) {
    const url = `${this.urlBase}/shoppingCart/add/product/`
    return this.http.post<IAddProductToCart>( url, body ).pipe(
      catchError ( e => e.error )
    )
  }
   
}
