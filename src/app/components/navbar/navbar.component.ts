import { FestivalService } from './../../services/festival/festival.service';
import { FilterService } from './../../services/filter/filter.service';
import { LoginService } from './../../services/login/login.service';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  @ViewChild('loginTrigger') loginTrigger: any;
  @ViewChild('filterTrigger') filterTrigger: any;
  userPictureUrl: string = '';
  closeLoginMenu: Subscription;
  pictureUrl: Subscription;
  searchValue: string = '';

  constructor(
    private loginService: LoginService,
    private filterService: FilterService,
    private festivalService: FestivalService
  ) {
    this.closeLoginMenu = this.loginService.closeMenuSubject.subscribe(() =>
      this.loginTrigger.closeMenu()
    );
    this.closeLoginMenu = this.filterService.closeMenuSubject.subscribe(() =>
      this.filterTrigger.closeMenu()
    );
    this.pictureUrl = this.loginService.pictureUrlSubject.subscribe((value) => {
      this.userPictureUrl = value;
    });
  }

  ngOnDestroy() {
    this.closeLoginMenu.unsubscribe();
    this.pictureUrl.unsubscribe();
  }

  searchByName() {
    this.festivalService.searchFestivalsByName(this.searchValue);
  }
}
