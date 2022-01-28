import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public closeMenuSubject = new Subject();

  closeMenu() {
    this.closeMenuSubject.next(true);
  }
}
