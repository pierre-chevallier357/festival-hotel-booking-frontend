import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  restApiUrl: string = 'http://localhost:8080/user';
  public userId: number = 0;

  constructor(private httpClient: HttpClient) {}

  createTempUser() {
    if (this.userId === 0) {
      this.httpClient
        .get<number>(this.restApiUrl + '/create-Temp-user/')
        .subscribe((userId) => {
          this.userId = userId;
          console.log(userId);
        });
    }
  }
}
