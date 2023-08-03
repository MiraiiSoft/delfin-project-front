import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResAllCiudad, IResOneCiudad } from '../interfaces/ciudad.interface';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private baseUrl = environment.API_URL;

  constructor( private http: HttpClient ) { }

  getAllCiudades(): Observable<IResAllCiudad>{

    const url = `${this.baseUrl}/ciudad`;

    return this.http.get<IResAllCiudad>( url )
      .pipe(
        catchError( err => of(err.error) )
      )

  }

  getOneCiudades( id: number ): Observable<IResOneCiudad>{

    const url = `${this.baseUrl}/ciudad/${id}`;

    return this.http.get<IResOneCiudad>( url )
      .pipe(
        catchError( err => of(err.error) )
      )

  }

}
