import { LoginService } from './../../services/login/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  festivalGoerTabIsActive: boolean = true;

  constructor(public loginService: LoginService) {}

  enableFestivalGoerTab() {
    this.festivalGoerTabIsActive = true;
  }

  disableFestivalGoerTab() {
    this.festivalGoerTabIsActive = false;
  }
}
