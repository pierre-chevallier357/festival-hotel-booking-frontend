import { LoginService } from './../../services/login/login.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('menuTrigger') trigger: any;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.closeMenuSubject.subscribe(() =>
      this.trigger.closeMenu()
    );
  }
}
