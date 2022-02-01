import { FestivalTypes } from '../../enums/festival-types';
import { Component, Output, EventEmitter } from '@angular/core';
import { Months } from 'src/app/enums/months';
import { Departements } from 'src/app/enums/departements';

@Component({
  selector: 'festival-filter',
  templateUrl: './festival-filter.component.html',
  styleUrls: ['./festival-filter.component.scss'],
})
export class FestivalFilterComponent {
  @Output() filtersChange: EventEmitter<
    [
      { name: string },
      { id: number; name: string },
      { id: number; name: string }
    ]
  > = new EventEmitter<
    [
      { name: string },
      { id: number; name: string },
      { id: number; name: string }
    ]
  >();

  festivalList: { name: string }[] = FestivalTypes;
  months: { id: number; name: string }[] = Months;
  departementList: { id: number; name: string }[] = Departements;

  selectedType: { name: string } = { name: '' };
  selectedMonth: { id: number; name: string } = {
    id: 0,
    name: '',
  };
  selectedDepartement: { id: number; name: string } = {
    id: 0,
    name: '',
  };

  sendFiltersToParent() {
    this.filtersChange.emit([
      this.selectedType,
      this.selectedMonth,
      this.selectedDepartement,
    ]);
  }
}
