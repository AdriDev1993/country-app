import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})

export class CountriesService {

  private baseUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCapital(term : string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/capital/${term}`)
    .pipe(
      catchError(() => of([]))
    );
  }

  searchCountry(term : string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/name/${term}`)
    .pipe(
      catchError(() => of([]))
    );
  }

  searchRegion(term : string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/region/${term}`)
    .pipe(
      catchError(() => of([]))
    );
  }
}
