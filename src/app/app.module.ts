import { LodgingFilterComponent } from './components/lodging-filter/lodging-filter/lodging-filter.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LodgingComponent } from './components/lodging/lodging.component';
import { FestivalFilterComponent } from './components/festival-filter/festival-filter.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseAppModule } from '@angular/fire/app';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfessionalLoginComponent } from './components/login/professional-login/professional-login.component';
import { FacebookLoginComponent } from './components/login/facebook-login/facebook-login.component';
import { FestivalComponent } from './components/festival/festival.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfessionalLoginComponent,
    FacebookLoginComponent,
    FestivalComponent,
    FestivalFilterComponent,
    LodgingComponent,
    ShoppingCartComponent,
    LodgingFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FirebaseAppModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
