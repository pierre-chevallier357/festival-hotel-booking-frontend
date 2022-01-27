import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LodgingComponent } from './components/lodging/lodging.component';
import { FestivalComponent } from './components/festival/festival.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/festival', pathMatch: 'full' },
  { path: 'festival', component: FestivalComponent },
  { path: 'lodging', component: LodgingComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
