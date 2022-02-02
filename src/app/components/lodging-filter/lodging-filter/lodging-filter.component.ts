import { ShoppingCartService } from './../../../services/shopping-cart/shopping-cart.service';
import { Component, EventEmitter, Output, OnChanges } from '@angular/core';
import { EtablissementTypes } from 'src/app/enums/etablissement-types';

@Component({
  selector: 'lodging-filter',
  templateUrl: './lodging-filter.component.html',
  styleUrls: ['./lodging-filter.component.scss'],
})
export class LodgingFilterComponent implements OnChanges {
  @Output() filtersChange: EventEmitter<[{ name: string }]> = new EventEmitter<
    [{ name: string }]
  >();
  lodgingTypeList: { name: string }[] = EtablissementTypes;
  selectedType: { name: string } = { name: '' };
  numberOfPeople: number = 1;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnChanges(): void {
    this.shoppingCartService.updateNumberOfPeople(this.numberOfPeople);
  }

  sendFiltersToParent() {
    this.filtersChange.emit([this.selectedType]);
  }
}
