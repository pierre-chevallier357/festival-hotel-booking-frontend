import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  restApiUrl: string = 'http://129.88.210.2:4200/user';
  public userId: number = 0;

  constructor(private httpClient: HttpClient) {}

  createTempUser() {
    if (this.userId === 0) {
      this.httpClient
        .get<number>(this.restApiUrl + '/create-Temp-user/')
        .subscribe((userId) => {
          this.userId = userId;
        });
    }
  }

  disconnectUser() {
    this.httpClient
      .get<number>(this.restApiUrl + '/delete-Festivalier/' + this.userId)
      .subscribe((value) => {
        console.log('Disconnect user: ' + value);
      });
  }

  updateUserCredentials(name: string, email: string) {
    this.httpClient
      .get<number>(
        this.restApiUrl +
          '/connection-Festivalier/' +
          this.userId +
          '&' +
          name +
          '&' +
          email
      )
      .subscribe((value) => console.log(value));
  }
}
