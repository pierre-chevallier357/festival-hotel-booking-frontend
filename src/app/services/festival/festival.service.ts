import { Festival } from './../../models/festival';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FestivalService {
  restApiUrl: string = 'http://localhost:4200/festival';
  public festivalSource = new BehaviorSubject<Festival[]>([]);
  public savedFestival!: Festival;

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

  searchFestivalsByType(type: string) {
    this.httpClient
      .get<Festival[]>(this.restApiUrl + '/search-festival-type/' + type)
      .subscribe((festivalList) => {
        this.festivalSource.next(festivalList);
      });
  }

  searchFestivalsByMonth(monthId: number) {
    const monthIdString = this.addZeroToId(monthId);
    this.httpClient
      .get<Festival[]>(
        this.restApiUrl + '/search-festival-month/' + monthIdString
      )
      .subscribe((festivalList) => {
        this.festivalSource.next(festivalList);
      });
  }

  searchFestivalsByDepartement(departementName: string) {
    this.httpClient
      .get<Festival[]>(
        this.restApiUrl + '/search-festival-departement/' + departementName
      )
      .subscribe((festivalList) => {
        this.festivalSource.next(festivalList);
      });
  }

  addZeroToId(id: number): string {
    if (id <= 10) {
      return '0' + id;
    } else {
      return id.toString();
    }
  }

  searchFestival(
    name: string,
    city: string,
    type: string,
    departement: string,
    month: string
  ) {
    this.httpClient
      .get<Festival[]>(
        this.restApiUrl +
          '/search-festival/' +
          name +
          '&' +
          city +
          '&' +
          type +
          '&' +
          departement +
          '&' +
          month
      )
      .subscribe((festivalList) => {
        this.festivalSource.next(festivalList);
      });
  }

  getFestivalById(festivalId: number): Observable<Festival> {
    return this.httpClient.get<Festival>(
      this.restApiUrl + '/get-festival/' + festivalId
    );
  }
}
