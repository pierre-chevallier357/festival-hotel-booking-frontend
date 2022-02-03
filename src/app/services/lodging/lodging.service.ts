import { FestivalService } from 'src/app/services/festival/festival.service';
import { Etablissement } from './../../models/etablissement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LodgingService {
  restApiUrl: string = 'http://129.88.210.2:4200/etablissement';
  public lodgingSource = new BehaviorSubject<Etablissement[]>([]);

  constructor(private httpClient: HttpClient) {}

  searchLodging(festivalId: number, name: string, type: string, city?: string) {
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

  getLodgingById(lodgingId: number): Observable<Etablissement> {
    return this.httpClient.get<Etablissement>(
      this.restApiUrl + '/get-etablissement/' + lodgingId
    );
  }
}
