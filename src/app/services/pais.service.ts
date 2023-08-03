import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IResAllPais, IResOnePais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUrl = environment.API_URL;

  constructor( private http: HttpClient ) { }

  getAllPais(): Observable<IResAllPais>{

    const url = `${this.baseUrl}/pais`;

    return this.http.get<IResAllPais>( url )
      .pipe(
        catchError( err => of(err.error) )
      )

  }

  getOnePais( id: string ): Observable<IResOnePais>{

    const url = `${this.baseUrl}/pais/${id}`;

    return this.http.get<IResOnePais>( url )
      .pipe(
        catchError( err => of(err.error) )
      )

  }
}
