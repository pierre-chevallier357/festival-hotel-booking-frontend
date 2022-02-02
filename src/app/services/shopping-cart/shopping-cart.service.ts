import { Observable } from 'rxjs';
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
    let url: string = this.restApiUrl + '/add-product/';
    let produit =
      this.userService.userId +
      '&' +
      festival.idFestival +
      '&' +
      lodging.idetab +
      '&' +
      1;
    console.log(url + produit);
    let res = this.httpClient.get<boolean>(url + produit);
    res.subscribe((value) => console.log('YEZUYI: ' + value));
    return this.httpClient.get<any>(url + produit);
    /*
    return this.http.post<CV>(url, updatedCv)

    return this.httpClient.post<Produit>(
      this.restApiUrl + '/add-product/' + this.userService.userId + '&',
      produit
    );
    */
  }

  getUserShoppingCart(): Observable<Produit[]> {
    console.log(this.restApiUrl + '/get-panier/' + this.userService.userId);
    return this.httpClient.get<Produit[]>(
      this.restApiUrl + '/get-panier/' + this.userService.userId
    );
  }
}
