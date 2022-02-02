import { HttpClient } from '@angular/common/http';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { Etablissement } from 'src/app/models/etablissement';
import { Festival } from 'src/app/models/festival';
import { Produit } from 'src/app/models/produit';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  restApiUrl: string = 'http://localhost:8080/panier';

  constructor(
    private userService: UserService,
    private httpClient: HttpClient
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
}
