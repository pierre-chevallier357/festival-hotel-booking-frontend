import { LoginService } from './../../../services/login/login.service';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss'],
})
export class FacebookLoginComponent {
  name: string = '';
  closeMenuEvent = new EventEmitter<void>();
  user: any;

  constructor(private loginService: LoginService) {}

  connectWithFacebook() {
    this.loginService.connectWithFacebook();
    this.emitEventToParent();
  }

  emitEventToParent() {
    this.loginService.closeMenu();
  }

  sendUserPictureToService(pictureUrl: string) {
    this.loginService.setUserPicture(pictureUrl);
  }
}
