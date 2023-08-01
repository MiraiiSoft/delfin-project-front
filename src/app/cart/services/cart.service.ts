import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICartOne, ICartProduct_add_update, ICartProductDelete } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private urlBase = environment.API_URL;

  constructor(private http:HttpClient) { }

  getCartById( id:string ) {
    const url = `${ this.urlBase }/shoppingcart/${ id }`
    return this.http.get<ICartOne>( url ).pipe(
      catchError( e => of( e.error ) )
    )
  }

  deleteCartById(id: string) {
    const url = `${this.urlBase}/shoppingCart/delete/${id}`
    return this.http.delete( url ).pipe( 
      catchError( e => of(e.error) )
    )
  }

  updateCartProductById(id: string, body:ICartProduct_add_update) {
    const url = `${this.urlBase}/shoppingCart/update/${id}` 
    return this.http.put<ICartProduct_add_update>(url, body).pipe(
      catchError( e => of( e.error ) )
    )
  }

  addProductToCart(body: ICartProduct_add_update) {
    const url = `${this.urlBase}/shoppingCart/add/product/`
    return this.http.post<ICartProduct_add_update>( url, body ).pipe(
      catchError ( e => e.error )
    )
  }

  deleteProductOfCart( id:string ) {
    const url = `${this.urlBase}/shoppingCart/delete/${id}`
    return this.http.delete<ICartProductDelete>( url ).pipe(
      catchError( e => e.error)
    )
  }
   
}
