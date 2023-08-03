import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResCartOne, IResDeleteCartProduct, IResCartProduct_add, ICartProduct_add, ICartProduct_req } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  
  private urlBase = environment.API_URL;

  constructor(private http:HttpClient) { }

  getCartById( id:string ) {
    const url = `${ this.urlBase }/shoppingcart/${ id }`
    return this.http.get<IResCartOne>( url ).pipe(
      catchError( e => of( e.error ) )
    )
  }


  updateCartProductById(id: string, body:ICartProduct_add) {
    const url = `${this.urlBase}/shoppingCart/update/${ id }` 
    return this.http.put<ICartProduct_add>(url, body).pipe(
      catchError( e => of( e.error ) )
    )
  }

  addProductToCart(body: ICartProduct_req) {
    const url = `${this.urlBase}/shoppingCart/add/product/`
    return this.http.post<IResCartProduct_add>( url, body ).pipe(
      catchError ( e => e.error )
    )
  }

  deleteProductOfCart( id:string ) {
    const url = `${this.urlBase}/shoppingCart/delete/product/${ id }`
    return this.http.delete<IResDeleteCartProduct>( url ).pipe(
      catchError( e => e.error)
    )
  }
   
}
