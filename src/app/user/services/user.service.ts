import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResponseUser } from '../interfaces/user.interface';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.API_URL;

  constructor( private http: HttpClient ) { }

  getPerfil(): Observable<IResponseUser>{
    const url = `${this.baseUrl}/user/perfil`;

    const headers = new HttpHeaders()
      .set('token', localStorage.getItem('token') || '');

    return this.http.get<IResponseUser>( url, { headers } )
      .pipe(
        catchError( err => of(err.error) )
      )
  }

}
