import { FestivalTypes } from '../../enums/festival-types';
import { Component } from '@angular/core';
import { Months } from 'src/app/enums/months';
import { Departements } from 'src/app/enums/departements';

@Component({
  selector: 'festival-filter',
  templateUrl: './festival-filter.component.html',
  styleUrls: ['./festival-filter.component.scss'],
})
export class FestivalFilterComponent {
  festivalList: { nom: string }[] = FestivalTypes;
  selectedFestival: { nom: string } = { nom: '' };
  months: { id: number; name: string }[] = Months;
  selectedMonth: { id: number; name: string } = {
    id: 0,
    name: '',
  };
  departementList: { id: number; name: string }[] = Departements;
  selectedDepartement: { id: number; name: string } = {
    id: 0,
    name: '',
  };
}
