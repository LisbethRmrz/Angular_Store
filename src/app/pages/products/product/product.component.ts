import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() product !: Product;
@Output() addToCartClick = new EventEmitter<Product>();
//EventEmitter es una clase de angular que implementa objetos capaces de emitir un evento
  constructor() { }

  ngOnInit(): void {
  }

  onClick():void{
    //console.log(this.product);
    this.addToCartClick.emit(this.product);
  }

}
