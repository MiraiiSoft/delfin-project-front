import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogin, IRegistro, IResponseAuth } from '../interfaces/login.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

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

  validarToken(): Observable<boolean>{
    const url = `${ this.baseUrl }/user/perfil`;

    const headers = new HttpHeaders()
      .set('token', localStorage.getItem('token') || '')

    return this.http.get<IResponseAuth>( url, { headers } )
      .pipe(
        map( res => {
          return res.success
        } ),
        catchError( err => of(false) )
      );
  }

  registro( datos: IRegistro ): Observable<IResponseAuth>{
    const url = `${ this.baseUrl }/auth/register`;

    return this.http.post<IResponseAuth>( url, datos )
      .pipe(
        catchError( err => of(err.error) )
      )
      
  }

  confimAccount( token: string ){
    const url = `${ this.baseUrl }/auth/confirm/${token}`;

    return this.http.get<IResponseAuth>(url)
      .pipe(
        catchError( err => of(err.error) )
      );
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}
