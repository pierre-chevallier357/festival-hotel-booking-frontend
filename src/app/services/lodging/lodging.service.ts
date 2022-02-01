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

  constructor(private httpClient: HttpClient) {}

  getLodgingsByCity(
    festivalId: number,
    city: string
  ): Observable<Etablissement[]> {
    return this.httpClient
      .get<Etablissement[]>(
        this.restApiUrl +
          '/search-by-ville/' +
          festivalId +
          '&' +
          city +
          '&' +
          'HOTEL'
      )
      .pipe();
  }

  addProductToShoppingCart(festival: Festival, lodging: Etablissement) {
    let produit: Produit = {
      idProduit: 0,
      idFestivalier: 0,
      idFestival: festival.idFestival,
      idEtablissement: lodging.IDEtab,
      nbPass: 1,
    };
    return this.httpClient.post<Produit>(
      this.restApiUrl + '/add-product/',
      produit
    );
  }

  searchLodgingsByName(name: string) {
    this.httpClient
      .get<Etablissement[]>(this.restApiUrl + '/search-by-ville/' + name)
      .subscribe((festivalList) => {
        this.lodgingSource.next(festivalList);
      });
  }
}
