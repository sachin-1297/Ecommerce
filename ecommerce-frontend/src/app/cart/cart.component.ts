import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import {HomeService} from '../services/home.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products : any = [

  ];
  public grandTotal !: any;
  constructor(public home:HomeService) { }

  ngOnInit(): void {
    this.products = this.home.Product
    this.grandTotal = this.home.getTotalPrice()
  }
  emptycart(){
    this.products.pop(this.home.Product);
 
  
  }
  removeItem(items: any){
    this.home.removeCartItem(items)

  }
}
