import { UserService } from './../user/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { FirebaseApp } from '@angular/fire/app';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public closeMenuSubject = new Subject();
  public pictureUrlSubject = new BehaviorSubject('');
  name: string = '';
  public nameSubject = new BehaviorSubject('');
  user: any;

  constructor(public firebase: FirebaseApp, private userService: UserService) {}

  closeMenu() {
    this.closeMenuSubject.next(true);
  }

  setUserPicture(pictureUrl: string) {
    this.pictureUrlSubject.next(pictureUrl);
  }

  connectWithFacebook() {
    const provider = new FacebookAuthProvider();
    const auth = getAuth(this.firebase);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        this.user = user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential ? credential.accessToken : null;
        if (user.displayName) {
          this.name = user.displayName;
          this.nameSubject.next(user.displayName);
          if (user.email) {
            this.userService.updateUserCredentials(
              user.displayName,
              user.email
            );
          }
        } else {
          this.name = '';
        }
        if (user.photoURL) this.setUserPicture(user.photoURL);
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
