import { Component } from '@angular/core';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { FirebaseApp } from '@angular/fire/app';

@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss'],
})
export class FacebookLoginComponent {
  name: string = '';

  constructor(public firebase: FirebaseApp) {}

  connectWithFacebook() {
    const provider = new FacebookAuthProvider();
    const auth = getAuth(this.firebase);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential ? credential.accessToken : null;

        console.log(user.displayName);
        console.log(user);
        user.displayName ? (this.name = user.displayName) : (this.name = '');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = FacebookAuthProvider.credentialFromError(error);

        console.log(error.code, error.message);
      });
  }
}
