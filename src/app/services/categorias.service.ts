import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IResCategorias } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private urlBase = environment.API_URL;

  constructor(private http:HttpClient) { }

  getCategorias(): Observable<IResCategorias> {
    const url = `${this.urlBase}/categoria`
    return this.http.get<IResCategorias>(url).pipe(
      catchError (e => of(e.error))
    )
  }
}
