import { FestivalService } from './../../services/festival/festival.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Festival } from 'src/app/models/festival';

@Component({
  selector: 'festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss'],
})
export class FestivalComponent implements OnInit, OnDestroy {
  festivalList: Festival[] = [];
  allFestivalsSubscription: Subscription = new Subscription();
  updatedFestivalList: Subscription = new Subscription();

  constructor(private festivalService: FestivalService) {}

  ngOnInit() {
    this.allFestivalsSubscription = this.festivalService
      .getAllFestivals()
      .subscribe((festivalList) => (this.festivalList = festivalList));
    this.updatedFestivalList = this.festivalService.festivalSource
      .asObservable()
      .subscribe((festivalList) => {
        this.festivalList = festivalList;
      });
  }

  ngOnDestroy() {
    this.allFestivalsSubscription.unsubscribe();
    this.updatedFestivalList.unsubscribe();
  }

  saveSelectedFestival(id: number, city: string) {
    this.festivalService.savedFestival = {
      id: id,
      city: city,
    };
  }
}
