import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public closeMenuSubject = new Subject();

  closeMenu() {
    this.closeMenuSubject.next(true);
  }
}
