import { ShoppingCartComponent } from './shopping-cart/components/shopping-cart/shopping-cart.component';
import { LodgingComponent } from './lodging/components/lodging/lodging.component';
import { FestivalComponent } from './festival/components/festival/festival.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'lodging', component: LodgingComponent },
  { path: 'festival', component: FestivalComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
