import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { DetailsComponent } from './details/details.component';
//import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';




@NgModule({
  declarations: [
    CheckoutComponent,
    DetailsComponent,
    //ThankYouPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class CheckoutModule { }
