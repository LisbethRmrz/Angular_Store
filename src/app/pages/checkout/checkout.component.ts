import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/components/header/services/shopping-cart.service';
import { Details, Order } from 'src/app/shared/interfaces/order.interface';
import { Store } from 'src/app/shared/interfaces/store.interface';
import { DataService } from 'src/app/shared/services/data.service';
import { Product } from '../products/interfaces/product.interface';

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
  cart : Product[] = [];
  stores: Store[] = [];
  isDelivery=true;

  constructor(
    private dataSvc: DataService, 
    private shoppingCartSvc: ShoppingCartService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStores();
    this.getDataCart();
    this.prepareDetails();
  }

  onPickupOrDelivery(value: boolean):void{
    this.isDelivery = value;
  }

  onSubmit({value: formData}: NgForm):void{
    console.log("Save", formData);
    const DATA: Order = {
      ...formData,
      date: this.getCurrentDay(),
      isDelivery: this.isDelivery
    }
    this.dataSvc.saveOrder(DATA)
    .pipe(tap(res => console.log('Order ->',res)),
    switchMap(({id: orderId}) => {
      const details = this.prepareDetails();
      return this.dataSvc.saveDetailsOrder({details, orderId});
      }),
      tap(() => this.router.navigate(['/thank-you-page'])),
      delay(2000),
      tap(() => this.shoppingCartSvc.resetCart())
      )
    .subscribe();
  }

  //Leer sobre desubscribirse de un observable

  //getStores obtiene las tiendas desde la API
  private getStores():void{
    this.dataSvc.getStores()
    .pipe(
      tap((stores: Store[]) => this.stores=stores)
    ).subscribe()
  }

  private getCurrentDay():string{
    return new Date().toLocaleDateString();
  }

  private prepareDetails(): Details[]{
    const details: Details[]  = [];
    this.cart.forEach((product: Product)=> {
      //console.log(res);
      const {id:productId, name:productName, quantity, stock} = product;
      details.push({productId, productName, quantity});
    })
    return details;
  }

  //Obtener los valores dentro del carrito de compras
  private getDataCart():void{
    this.shoppingCartSvc.cartAction$
    .pipe(
      tap((products: Product[]) => this.cart = products)
      )
    .subscribe();
  }

}
