import { Etablissement } from './../../models/etablissement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LodgingService {
  restApiUrl: string = 'http://localhost:8080/etablissement';
  public lodgingSource = new BehaviorSubject<Etablissement[]>([]);

  constructor(private httpClient: HttpClient) {}

  searchLodging(festivalId: number, name: string, type: string, city: string) {
    console.log(
      this.restApiUrl +
        '/search-etablissement/' +
        festivalId +
        '&' +
        name +
        '&' +
        type +
        '&' +
        city
    );
    this.httpClient
      .get<Etablissement[]>(
        this.restApiUrl +
          '/search-etablissement/' +
          festivalId +
          '&' +
          name +
          '&' +
          type +
          '&' +
          city
      )
      .subscribe((lodgingList) => {
        this.lodgingSource.next(lodgingList);
      });
  }
}
