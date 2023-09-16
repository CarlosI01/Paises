import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, tap, map, catchError, of } from 'rxjs';
import { Countries } from '../interfaces/countri';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private api_url: string = 'https://restcountries.com/v3.1';

  constructor(private http_cliente: HttpClient) { }

  SearchCapital(capi: string): Observable<Countries[]> {
    const url: string = `${this.api_url}/capital/${capi}`;
    return this.http_cliente.get<Countries[]>(url)
      .pipe(
        catchError(() => of([]))
      );


  }


  SerachCountries(term: string): Observable<Countries[]> {
    const url: string = `${this.api_url}/name/${term}`;
    return this.http_cliente.get<Countries[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }

  SearchRegion(region: string): Observable<Countries[]> {
    const url: string = `${this.api_url}/region/${region}`;
    return this.http_cliente.get<Countries[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }

  SearchCodeCountrie(code: string):Observable<Countries | null>{
    const url: string=`${this.api_url}/alpha/${code}`;
    return this.http_cliente.get<Countries[]>(url).pipe(
      map(country => country.length > 0  ?  country[0]: null ),
      catchError((err)=>of(null))
    );
  }


}


// tap(countries=> console.log('Ps', countries)), 
// map(countries=> []),
// tap(countries=> console.log('PS-2', countries))