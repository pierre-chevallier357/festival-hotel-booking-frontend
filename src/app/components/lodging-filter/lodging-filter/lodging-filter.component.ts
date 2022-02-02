import { Component, EventEmitter, Output } from '@angular/core';
import { EtablissementTypes } from 'src/app/enums/etablissement-types';

@Component({
  selector: 'lodging-filter',
  templateUrl: './lodging-filter.component.html',
  styleUrls: ['./lodging-filter.component.scss'],
})
export class LodgingFilterComponent {
  @Output() filtersChange: EventEmitter<[{ name: string }]> = new EventEmitter<
    [{ name: string }]
  >();
  lodgingTypeList: { name: string }[] = EtablissementTypes;
  selectedType: { name: string } = { name: '' };
  numberOfPeople: number = 1;

  sendFiltersToParent() {
    this.filtersChange.emit([this.selectedType]);
  }
}
