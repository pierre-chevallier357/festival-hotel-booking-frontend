import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FestivalService {
  restApiUrl: string = 'http://localhost:8080/festival';
  public festivalSource = new BehaviorSubject<any[]>([]);
  public savedFestival: any = null;

  constructor(private httpClient: HttpClient) {}

  getFestivalsByCity(city: string): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.restApiUrl + '/reach-festival-ville/' + city)
      .pipe();
  }

  searchFestivalsByName(name: string) {
    this.httpClient
      .get<any[]>(this.restApiUrl + '/reach-festival-name/' + name)
      .subscribe((festivalList) => {
        this.festivalSource.next(festivalList);
      });
  }
  /*
  searchFestivalsByType(type: string) {
    this.httpClient
      .get<any[]>(this.restApiUrl + '/reach-festival-type/' + type)
      .subscribe((festivalList) => {
        this.festivalSource.next(festivalList);
      });
  }*/
}
