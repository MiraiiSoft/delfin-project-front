import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResColores } from '../interfaces/color.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {
  private urlBase = environment.API_URL;

  constructor(private http:HttpClient) { }

  getColores(): Observable<IResColores> {
    const url = `${this.urlBase}/color`
    return this.http.get<IResColores>(url).pipe(
      catchError (e => of(e.error))
    )
  }


}
