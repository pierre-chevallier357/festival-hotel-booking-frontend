import { ShoppingCartService } from './../../../services/shopping-cart/shopping-cart.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { EtablissementTypes } from 'src/app/enums/etablissement-types';

@Component({
  selector: 'lodging-filter',
  templateUrl: './lodging-filter.component.html',
  styleUrls: ['./lodging-filter.component.scss'],
})
export class LodgingFilterComponent {
  @Output() filtersChange: EventEmitter<
    [{ name: string }, { numberOfPeople: number }]
  > = new EventEmitter<[{ name: string }, { numberOfPeople: number }]>();
  lodgingTypeList: { name: string }[] = EtablissementTypes;
  selectedType: { name: string } = { name: '' };
  numberOfPeople: number = 1;

  constructor(private shoppingCartService: ShoppingCartService) {}

  sendFiltersToParent() {
    console.log('updateNumberOfPeople: ' + this.numberOfPeople);
    this.shoppingCartService.updateNumberOfPeople(this.numberOfPeople);
    this.filtersChange.emit([
      this.selectedType,
      { numberOfPeople: this.numberOfPeople },
    ]);
  }
}
