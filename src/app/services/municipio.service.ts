import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IResAllMunicipio, IResOneMunicipio } from '../interfaces/municipio.interface';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  private baseUrl = environment.API_URL;

  constructor( private http: HttpClient ) { }

  getAllMunicipio(): Observable<IResAllMunicipio>{

    const url = `${this.baseUrl}/municipio`;

    return this.http.get<IResAllMunicipio>( url )
      .pipe(
        catchError( err => of(err.error) )
      )

  }

  getAllMunicipioByCiudad( idciudad: number ): Observable<IResAllMunicipio>{

    const url = `${this.baseUrl}/municipio/ciudad/${idciudad}`;

    return this.http.get<IResAllMunicipio>( url )
      .pipe(
        catchError( err => of(err.error) )
      )

  }

  getOneMunicipio( id: number ): Observable<IResOneMunicipio>{

    const url = `${this.baseUrl}/municipio/${id}`;

    return this.http.get<IResOneMunicipio>( url )
      .pipe(
        catchError( err => of(err.error) )
      )

  }
}
