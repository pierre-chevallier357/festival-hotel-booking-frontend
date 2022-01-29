import { LodgingService } from './../../services/lodging/lodging.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.scss'],
})
export class LodgingComponent implements OnInit, OnDestroy {
  lodgingList: any[] = [];
  subscription1: Subscription = new Subscription();
  subscription2: Subscription = new Subscription();

  constructor(private lodgingService: LodgingService) {}

  ngOnInit() {
    this.subscription1 = this.lodgingService
      .getLodgingsByCity('REIMS')
      .subscribe((lodgingList) => (this.lodgingList = lodgingList));
    this.subscription2 = this.lodgingService.lodgingSource
      .asObservable()
      .subscribe((lodgingList) => {
        this.lodgingList = lodgingList;
      });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
