import { Etablissement } from './../../models/etablissement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LodgingService {
  restApiUrl: string = 'http://localhost:8080/etablissement';
  public lodgingSource = new BehaviorSubject<Etablissement[]>([]);

  constructor(private httpClient: HttpClient) {}

  getLodgingsByCity(
    festivalId: number,
    city: string
  ): Observable<Etablissement[]> {
    return this.httpClient
      .get<Etablissement[]>(
        this.restApiUrl +
          '/search-by-ville/' +
          festivalId +
          '&' +
          city +
          '&' +
          'HOTEL'
      )
      .pipe();
  }

  searchLodgingsByName(name: string) {
    this.httpClient
      .get<Etablissement[]>(this.restApiUrl + '/search-by-ville/' + 'name')
      .subscribe((festivalList) => {
        this.lodgingSource.next(festivalList);
      });
  }
}
