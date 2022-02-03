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
    id: number;
    festival: Festival;
    lodging: Etablissement;
    nbPass: number;
  }[] = [];
  isConnected: boolean = false;
  loginSubscription!: Subscription;
  totalNumberOfPass: number = 0;
  productId: number = 0;
  clickedPay: boolean = false;

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
          console.log('Received product: ' + product);
          nbPass = product.nbPass;
          this.totalNumberOfPass += 1;
          this.productId += 1;
          this.festivalService
            .getFestivalById(product.idFestival)
            .subscribe((festi) => {
              festival = festi;
              this.lodgingService
                .getLodgingById(product.idEtablissement)
                .subscribe((lodg) => {
                  lodging = lodg;
                  const id = this.productId;
                  this.userShoppingCart.push({
                    id,
                    festival,
                    lodging,
                    nbPass,
                  });
                  console.log(
                    'Product: ' + festival.nom + lodging.nom + nbPass
                  );
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
    this.clickedPay = true;
  }
}
