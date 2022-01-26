import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { FirebaseApp } from '@angular/fire/app';

// Error when invalid control is dirty, touched, or submitted.
export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  matcher = new LoginErrorStateMatcher();
  loginForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    passwordFormControl: new FormControl('', [Validators.required]),
  });
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
