import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IResOneDireccion } from '../interfaces/direccion.interface';
import { Direccion } from '../auth/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  private baseUrl = environment.API_URL;

  constructor( private http: HttpClient ) { }

  getUpdateDireccion( id: number, direccion: Direccion ): Observable<IResOneDireccion>{

    const url = `${this.baseUrl}/direccion/update/${id}`;

    const headers = new HttpHeaders()
      .set('token', localStorage.getItem('token') || '');

    return this.http.put<IResOneDireccion>( url, direccion, { headers } )
      .pipe(
        catchError( err => of(err.error) )
      )

  }
}
