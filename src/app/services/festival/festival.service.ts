import { Festival } from './../../models/festival';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FestivalService {
  restApiUrl: string = 'http://localhost:8080/festival';
  public festivalSource = new BehaviorSubject<Festival[]>([]);
  public savedFestival: any = null;

  constructor(private httpClient: HttpClient) {}

  getFestivalsByCity(city: string): Observable<Festival[]> {
    return this.httpClient
      .get<Festival[]>(this.restApiUrl + '/search-festival-ville/' + city)
      .pipe();
  }

  getAllFestivals() {
    return this.httpClient
      .get<Festival[]>(this.restApiUrl + '/search-all-festival/')
      .pipe();
  }

  searchFestivalsByName(name: string) {
    this.httpClient
      .get<Festival[]>(this.restApiUrl + '/search-festival-name/' + name)
      .subscribe((festivalList) => {
        this.festivalSource.next(festivalList);
      });
  }
  /*
  searchFestivalsByType(type: string) {
    this.httpClient
      .get<Festival[]>(this.restApiUrl + '/reach-festival-type/' + type)
      .subscribe((festivalList) => {
        this.festivalSource.next(festivalList);
      });
  }*/
}
