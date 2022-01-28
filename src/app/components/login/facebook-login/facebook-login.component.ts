import { LoginService } from './../../../services/login/login.service';
import { Component } from '@angular/core';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { FirebaseApp } from '@angular/fire/app';
import { Subject } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss'],
})
export class FacebookLoginComponent {
  name: string = '';
  closeMenuEvent = new EventEmitter<void>();
  user: any;

  constructor(
    public firebase: FirebaseApp,
    private loginService: LoginService
  ) {}

  connectWithFacebook() {
    const provider = new FacebookAuthProvider();
    const auth = getAuth(this.firebase);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        this.user = user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential ? credential.accessToken : null;

        user.displayName ? (this.name = user.displayName) : (this.name = '');
        if (user.photoURL) this.sendUserPictureToService(user.photoURL);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = FacebookAuthProvider.credentialFromError(error);

        console.log(error.code, error.message);
      });
    this.emitEventToParent();
  }

  emitEventToParent() {
    this.loginService.closeMenu();
  }

  sendUserPictureToService(pictureUrl: string) {
    this.loginService.setUserPicture(pictureUrl);
  }
}
