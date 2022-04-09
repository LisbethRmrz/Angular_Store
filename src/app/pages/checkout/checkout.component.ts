import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  model = {
    name: 'Lisbeth',
    store: '',
    shippingAddress: '',
    city: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  onPickupOrDelivery(value: boolean):void{
    console.log(value);
  }

}
