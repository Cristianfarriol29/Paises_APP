import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTCountries } from '../pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v2"
  constructor(private http : HttpClient) { }

  buscarPais(termino:string): Observable<RESTCountries[]> {
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<RESTCountries[]>(url);
  }
  buscarCapital(termino:string): Observable<RESTCountries[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<RESTCountries[]>(url);
  }
  getPaisPorAlpha(id:string): Observable<RESTCountries> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<RESTCountries>(url);
}
getCountryByRegion(id:string): Observable<RESTCountries[]>{
  const url = `${this.apiUrl}/regionalbloc/${id}`
  return this.http.get<RESTCountries[]>(url);
}

}
