import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/products/product/product.component';
import { CartComponent } from './shared/components/cart/cart/cart.component';
import { CheckoutModule } from './pages/checkout/checkout.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ThankYouPageComponent } from './pages/checkout/thank-you-page/thank-you-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    ThankYouPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'productos', component: ProductsComponent },
      {path: 'cart', component: CartComponent },
      { path: '', component: ProductsComponent },
      {path: 'checkout', component: CheckoutComponent},
      { path: 'thank-you-page', component: ThankYouPageComponent},
      { path: '**', redirectTo: '', pathMatch: 'full'}
    ]),
    CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
