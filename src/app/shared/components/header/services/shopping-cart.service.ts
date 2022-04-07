import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/pages/products/interfaces/product.interface';

@Injectable(
{
providedIn: 'root'}
)
export class ShoppingCartService {
products: Product[] = []; //Array de productos tipado con la interface

private cartSubject = new Subject<Product[]>();
private totalSubject = new Subject<number>();
private quantitySubject = new Subject<number>();

//Los getter me devuelven un observable del valor que tengan
get cartAction$():Observable<Product[]>{
    return this.cartSubject.asObservable();
}

get totalAction$():Observable<number>{
    return this.totalSubject.asObservable();
}

get quantityAction$():Observable<number>{
    return this.quantitySubject.asObservable();
}

//Metodo intermediario de los metodos de gestion (publico) para acceder a los metodos
updateCart(product: Product):void{
this.addToCart(product);
this.calcTotal();
this.quantityProducts();
}

//Metodos para gestionar el total, agregar a carrito y cantidad
private addToCart(product: Product):void{
    this.products.push(product);
    this.cartSubject.next(this.products);
}

private calcTotal():void{
const TOTAL = this.products.reduce((acc, prod)=> acc+=prod.price, 0);
this.totalSubject.next(TOTAL);
}

private quantityProducts():void{
    const QUANTITY = this.products.length;
    this.quantitySubject.next(QUANTITY);
}
 
}