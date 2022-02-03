import { ShoppingCartService } from './../../services/shopping-cart/shopping-cart.service';
import { Etablissement } from './../../models/etablissement';
import { Festival } from './../../models/festival';
import { FestivalService } from 'src/app/services/festival/festival.service';
import { LodgingService } from './../../services/lodging/lodging.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotPossibleSnackBarComponent } from './not-possible-snack-bar/not-possible-snack-bar/not-possible-snack-bar.component';

@Component({
  selector: 'lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.scss'],
})
export class LodgingComponent implements OnInit, OnDestroy {
  lodgingList: any[] = [];
  lodgingListSubscription: Subscription = new Subscription();
  filteredLodgingListSubscription: Subscription = new Subscription();
  selectedFestival: any;
  durationInSeconds = 5;

  constructor(
    private lodgingService: LodgingService,
    private festivalService: FestivalService,
    private shoppingCartService: ShoppingCartService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    let selectedFestival: Festival = this.festivalService.savedFestival;
    this.selectedFestival = selectedFestival;
    this.lodgingService.searchLodging(
      selectedFestival.idFestival,
      'null',
      'null',
      selectedFestival.commune.toUpperCase()
    );
    this.lodgingListSubscription =
      this.lodgingService.lodgingSource.subscribe();
    this.filteredLodgingListSubscription = this.lodgingService.lodgingSource
      .asObservable()
      .subscribe((lodgingList) => {
        this.lodgingList = lodgingList;
      });
  }

  ngOnDestroy() {
    this.lodgingListSubscription.unsubscribe();
    this.filteredLodgingListSubscription.unsubscribe();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(NotPossibleSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  addProductToShoppingCart(lodging: Etablissement) {
    this.shoppingCartService
      .addProductToShoppingCart(this.selectedFestival, lodging)
      .subscribe((canAddToShoppingCart) => {
        if (!canAddToShoppingCart) {
          this.openSnackBar();
        }
      });
  }
}
