import { Subscription } from 'rxjs';
import { LoginService } from './../../services/login/login.service';
import { LodgingService } from './../../services/lodging/lodging.service';
import { FestivalService } from 'src/app/services/festival/festival.service';
import { Etablissement } from './../../models/etablissement';
import { Festival } from 'src/app/models/festival';
import { ShoppingCartService } from './../../services/shopping-cart/shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  userShoppingCart: {
    festival: Festival;
    lodging: Etablissement;
    nbPass: number;
  }[] = [];
  isConnected: boolean = false;
  loginSubscription!: Subscription;
  totalNumberOfPass: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private festivalService: FestivalService,
    private lodgingService: LodgingService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    let festival: Festival;
    let lodging: Etablissement;
    let nbPass: number;
    this.shoppingCartService
      .getUserShoppingCart()
      .subscribe((productList: Produit[]) => {
        productList.forEach((product) => {
          nbPass = product.nbPass;
          this.totalNumberOfPass += 1;
          this.festivalService
            .getFestivalById(product.idFestival)
            .subscribe((festi) => {
              festival = festi;
              this.lodgingService
                .getLodgingById(product.idEtablissement)
                .subscribe((lodg) => {
                  lodging = lodg;
                  this.userShoppingCart.push({ festival, lodging, nbPass });
                });
            });
        });
      });
    this.loginSubscription = this.loginService.nameSubject.subscribe((name) => {
      if (name === '') {
        this.isConnected = false;
      } else {
        this.isConnected = true;
      }
    });
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }

  pay() {
    console.log('Navigation vers paiement');
  }
}
