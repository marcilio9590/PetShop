import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/accounts/login-page/login-page.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ResetPasswordPageComponent } from './pages/accounts/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/accounts/signup-page/signup-page.component';
import { PetsPageComponent } from './pages/accounts/pets-page/pets-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/store/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    PetsPageComponent,
    ProductsPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
