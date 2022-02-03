import { LoginService } from './services/login/login.service';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';
import { UserService } from './services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private userService: UserService,
    private shoppingCartService: ShoppingCartService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.userService.createTempUser();
  }

  disconnectUser() {
    if (this.loginService.name === '') {
      this.userService.disconnectUser();
      this.shoppingCartService.emptyShoppingCart();
    }
  }
}
