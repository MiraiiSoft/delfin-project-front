import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogin, IResponseAuth } from '../interfaces/login.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.API_URL;

  constructor( private http: HttpClient ) { }

  login( credenciales: ILogin ){

    const url = `${ this.baseUrl }/auth/login`;

    return this.http.post<IResponseAuth>( url, credenciales, { observe: 'response' } )
      .pipe(
        tap( res => {
          if( res.body?.success ){
            localStorage.setItem('token', res.headers.get('token') || '');
            localStorage.setItem('user', res.body.data?.usuario || '');

          }
        } ),
        map( res => res.body?.success ),
        catchError( err => of(err.error) )
      );

  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}
