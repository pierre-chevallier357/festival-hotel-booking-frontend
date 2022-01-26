import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LodgingComponent } from './components/lodging/lodging.component';
import { FestivalComponent } from './components/festival/festival.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'festival', component: FestivalComponent },
  { path: 'lodging', component: LodgingComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
