import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../Pais';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl = "https://restcountries.com/v3.1/all"
  constructor(private http:HttpClient) { }

  getAll(): Observable<Pais[]>{
    return this.http.get<Pais[]>(this.apiUrl)
  }

  private byRegion = "https://restcountries.com/v3.1/region"
  getByReggion(region:string): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.byRegion}/${region}`)
  }
}