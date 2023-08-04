import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {
  private urlBase = environment.API_URL;

  constructor(private http:HttpClient) { }

}
