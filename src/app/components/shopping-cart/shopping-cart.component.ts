import { ShoppingCartService } from './../../services/shopping-cart/shopping-cart.service';
import { Festival } from './../../models/festival';
import { Etablissement } from './../../models/etablissement';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  lodgingTemp: Etablissement = {
    type: 'HOTEL',
    classement: '4 étoiles',
    nom: 'HÔTEL GOLDEN TULIP VILLA MASSALIA MARSEILLE',
    telephone: '0491729027',
    email: 'info@goldentulipvillamassalia.com',
    siteInternet: 'www.goldentulipvillamassalia.com',
    capaciteDAccueil: 1220,
    codePostal: 13008,
    adresse: '17 place Louis Bonnefon',
    departement: 'BOUCHES-DU-RHONE',
    region: "PROVENCE-ALPES-COTE D'AZUR",
    commune: 'MARSEILLE',
    nbLogement: 140,
    idetab: 243,
    coordonnesGPSString: '5.381553,0.0',
  };
  festivalTemp: Festival = {
    nom: 'Biennale Internationale des Arts du Cirque Provence Alpes Côte d’Azur (BIAC)',
    domaine: 'Cirque et Arts de la rue',
    complementDomaine: 'Cirque',
    idFestival: 1,
    moisIndicatif: '1',
    duree: 30,
    departement: 'Bouches-du-Rhône',
    commune: 'MARSEILLE',
  };

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.shoppingCartService.getUserShoppingCart();
  }
}
