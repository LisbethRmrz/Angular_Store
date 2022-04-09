import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [
    CheckoutComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class CheckoutModule { }
