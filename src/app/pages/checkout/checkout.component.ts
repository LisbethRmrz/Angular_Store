import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Store } from 'src/app/shared/interfaces/store.interface';
import { DataService } from 'src/app/shared/services/data.service';

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
  stores: Store[] = [];

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.getStores();
  }

  onPickupOrDelivery(value: boolean):void{
    console.log(value);
  }

  onSubmit():void{
    
  }

  //Leer sobre desubscribirse de un observable
  getStores():void{
    this.dataSvc.getStores()
    .pipe(
      tap((stores: Store[]) => this.stores=stores)
    ).subscribe()
  }

}
