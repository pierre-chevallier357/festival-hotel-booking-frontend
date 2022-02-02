import { LodgingService } from './../../services/lodging/lodging.service';
import { FestivalService } from './../../services/festival/festival.service';
import { FilterService } from './../../services/filter/filter.service';
import { LoginService } from './../../services/login/login.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('loginTrigger') loginTrigger: any;
  @ViewChild('filterTrigger') filterTrigger: any;
  userPictureUrl: string = '';
  closeLoginMenu: Subscription;
  pictureUrl: Subscription;
  searchValue: string = '';
  currentRoute: string = '';

  constructor(
    private loginService: LoginService,
    private filterService: FilterService,
    private festivalService: FestivalService,
    private lodgingService: LodgingService,
    private router: Router
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

  ngOnInit() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
      });
  }

  ngOnDestroy() {
    this.closeLoginMenu.unsubscribe();
    this.pictureUrl.unsubscribe();
  }

  searchFestival(filters?: any) {
    let tempName = 'null';
    let tempType = 'null';
    let tempMonth = 'null';
    let tempCity = 'null';
    let tempDepartement = 'null';
    if (this.searchValue !== '') {
      tempName = this.searchValue.toUpperCase();
    }
    if (filters) {
      if (filters[0].name !== '') {
        tempType = filters[0].name;
      }
      if (filters[1].name !== '') {
        tempMonth = filters[1].name.toLowerCase();
      }
      if (filters[2].name !== '') {
        tempDepartement = filters[2].name;
      }
    }
    this.festivalService.searchFestival(
      tempName,
      tempCity,
      tempType,
      tempDepartement,
      tempMonth
    );
  }

  searchLodging(filters?: any) {
    let tempName = 'null';
    let tempType = 'null';
    let tempCity = 'null';
    if (this.searchValue !== '') {
      tempName = this.searchValue.toUpperCase();
    }
    if (filters || filters !== undefined) {
      filters.forEach((value: any) => console.log('value: ' + value.value));
      if (filters[1].type !== '') {
        tempType = filters[0].type.toUpperCase();
      }
      if (filters[2].city !== '') {
        tempType = filters[0].city.toUpperCase();
      }
    }
    this.lodgingService.searchLodging(
      this.festivalService.savedFestival.idFestival,
      tempName,
      tempType,
      tempCity
    );
  }
}
