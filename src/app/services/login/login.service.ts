import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public closeMenuSubject = new Subject();
  public pictureUrlSubject = new BehaviorSubject('');

  closeMenu() {
    this.closeMenuSubject.next(true);
  }

  setUserPicture(pictureUrl: string) {
    this.pictureUrlSubject.next(pictureUrl);
  }
}
