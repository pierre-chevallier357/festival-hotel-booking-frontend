import { UserService } from './../user/user.service';
import { Produit } from './../../models/produit';
import { Etablissement } from './../../models/etablissement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Festival } from 'src/app/models/festival';

@Injectable({
  providedIn: 'root',
})
export class LodgingService {
  restApiUrl: string = 'http://localhost:8080/etablissement';
  public lodgingSource = new BehaviorSubject<Etablissement[]>([]);

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  addProductToShoppingCart(festival: Festival, lodging: Etablissement) {
    console.log('Festival: ' + festival.nom);
    console.log('Lodging: ' + lodging.nom);
    let produit: Produit = {
      idProduit: 0,
      idFestivalier: this.userService.userId,
      idFestival: festival.idFestival,
      idEtablissement: lodging.idetab,
      nbPass: 1,
    };
    console.log(
      'URL: ' +
        (
          this.restApiUrl +
          '/add-product/' +
          this.userService.userId +
          '&' +
          JSON.stringify(produit)
        ).toString()
    );
    return this.httpClient.post<Produit>(
      this.restApiUrl + '/add-product/' + this.userService.userId + '&',
      JSON.stringify(produit)
    );
  }

  searchLodging(festivalId: number, name: string, type: string, city: string) {
    console.log(
      this.restApiUrl +
        '/search-etablissement/' +
        festivalId +
        '&' +
        name +
        '&' +
        type +
        '&' +
        city
    );
    this.httpClient
      .get<Etablissement[]>(
        this.restApiUrl +
          '/search-etablissement/' +
          festivalId +
          '&' +
          name +
          '&' +
          type +
          '&' +
          city
      )
      .subscribe((lodgingList) => {
        this.lodgingSource.next(lodgingList);
      });
  }
}
