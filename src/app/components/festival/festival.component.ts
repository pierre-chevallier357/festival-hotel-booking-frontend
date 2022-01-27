import { Festival } from './../models/festival';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss'],
})
export class FestivalComponent implements OnInit {
  /*
  myFestival: Festival = {
    id: 1,
    name: 'Musilac',
    type: 'Musique',
    subtype: '',
    departement: 73,
    duration: 4,
    monthNumber: 7,
    city: 'Aix-les-Bains',
    comment:
      "Les festivals poids lourds de l'été lâchent les premier noms : Stromae, -M-, Angèle, SCH, Nick Cave & The Bad Seeds, Green Day, Dropkick Murphys",
    capacity: 30000,
    nbOfBookedPass: 12345,
  };
  */
  apiUrl: string = 'http://localhost:8080';
  testData: { id: number; email: string; name: string } = {
    id: 0,
    name: '',
    email: '',
  };

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get<{ id: number; email: string; name: string }>(this.apiUrl + '/')
      .subscribe((value) => (this.testData = value));
  }
}
