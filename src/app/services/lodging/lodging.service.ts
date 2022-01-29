import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LodgingService {
  restApiUrl: string = 'http://localhost:8080/etablissement';
  public lodgingSource = new BehaviorSubject<any[]>([]);

  constructor(private httpClient: HttpClient) {}

  getLodgingsByCity(festivalId: number, city: string): Observable<any[]> {
    console.log('id:' + festivalId, 'city:' + city);
    return this.httpClient
      .get<any[]>(
        this.restApiUrl +
          '/search-by-ville/' +
          festivalId +
          '&' +
          'REIMS' +
          '&HOTEL'
      )
      .pipe();
  }

  searchLodgingsByName(name: string) {
    this.httpClient
      .get<any[]>(this.restApiUrl + '/search-by-ville/' + 'name')
      .subscribe((festivalList) => {
        this.lodgingSource.next(festivalList);
      });
  }
}
