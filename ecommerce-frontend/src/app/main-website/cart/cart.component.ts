import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';
import {HomeService} from '../services/home.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products : any = [

  ];
  
  constructor(public home:HomeService,private cartservice:CartService) { 
    
  }

  ngOnInit(): void {

    this.itemsCart();
    this.grandTotal();
    
  }
  emptycart(){
    localStorage.removeItem('product')
    this.products = [];
    this.cartnumber = 0;
    this.cartservice.cartSub.next(this.cartnumber);
  
  }
  
  removeItem(items: any){
    console.log("printing items "+ items);
    if(localStorage.getItem('product')){
      this.products = JSON.parse(localStorage.getItem('product') || '{}');
      for(let i=0;i<this.products.length;i++){
        if(this.products[i].id === items){
          this.products.splice(i , 1);
          localStorage.setItem('product', JSON.stringify(this.products));
          this.grandTotal();
          this.cartProducts();
        }
      }
    }

  }
  itemsCart(){
    var count = localStorage.getItem('product');
    console.log(count);
    if (count != null){
      this.products = JSON.parse(count);
     
    }
  }

  totalPrice :number = 0;

  grandTotal(){
    if(localStorage.getItem('product')){
      this.products = JSON.parse(localStorage.getItem('product') || '{}');
      this.totalPrice = this.products.reduce(function(acc: any,val: any){
        return acc + (val.price * val.quantity);
      },0)
    }
  }
    cartnumber : number = 0;
  
  cartProducts(){
    
   
    var cartitem = JSON.parse(localStorage.getItem('product') || '{}')
    this.cartnumber = cartitem.length;
    this.cartservice.cartSub.next(this.cartnumber)
    console.log("printing cart number",this.cartnumber)
 
   

}
}
