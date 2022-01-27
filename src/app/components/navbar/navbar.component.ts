import { LoginService } from './../../services/login/login.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  @ViewChild('menuTrigger') trigger: any;
  userPictureUrl: string = '';
  closeMenu: Subscription;
  pictureUrl: Subscription;

  constructor(private loginService: LoginService) {
    this.closeMenu = this.loginService.closeMenuSubject.subscribe(() =>
      this.trigger.closeMenu()
    );
    this.pictureUrl = this.loginService.pictureUrlSubject.subscribe((value) => {
      this.userPictureUrl = value;
    });
  }

  ngOnDestroy() {
    this.closeMenu.unsubscribe();
    this.pictureUrl.unsubscribe();
  }
}
