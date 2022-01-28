import { FestivalService } from './../../services/festival/festival.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss'],
})
export class FestivalComponent implements OnInit, OnDestroy {
  festivalList: any[] = [];
  subscription1: Subscription = new Subscription();
  subscription2: Subscription = new Subscription();

  constructor(private festivalService: FestivalService) {}

  ngOnInit() {
    this.subscription1 = this.festivalService
      .getFestivalsByCity('REIMS')
      .subscribe((festivalList) => (this.festivalList = festivalList));
    this.subscription2 = this.festivalService.festivalSource
      .asObservable()
      .subscribe((festivalList) => {
        this.festivalList = festivalList;
      });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
