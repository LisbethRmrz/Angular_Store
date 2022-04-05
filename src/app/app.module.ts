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


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'productos', component: ProductsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
