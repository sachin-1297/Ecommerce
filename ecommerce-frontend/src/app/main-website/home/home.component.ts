import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { ToastrService } from 'ngx-toastr';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productQuantity : FormGroup ;
  clicked = false;
 
  Product_data: any[] = [
    { name: 'phone', price: 10, imageUrl: '/assets/images/download (2).jpg', id: '1', category: 'mobile phones', description: 'very good phone' ,quantity : 1},
    { name: 'phone', price: 11, imageUrl: '/assets/images/download (2).jpg', id: '2', category: 'mobile phones', description: 'very good phone' ,quantity : 1},
    { name: 'phone', price: 12, imageUrl: '/assets/images/download (1).jpg', id: '3', category: 'mobile phones', description: 'very good phone' ,quantity : 1},
    { name: 'phone', price: 13, imageUrl: '/assets/images/download (1).jpg', id: '4', category: 'mobile phones', description: 'very good phone' ,quantity : 1},
    { name: 'phone', price: 14, imageUrl: '/assets/images/images (2).jpg', id: '5', category: 'mobile phones', description: 'very good phone' ,quantity : 1},
    { name: 'phone', price: 15, imageUrl: '/assets/images/images (2).jpg', id: '6', category: 'mobile phones', description: 'very good phone' ,quantity : 1},
    { name: 'phone', price: 16, imageUrl: '/assets/images/download (2).jpg', id: '7', category: 'mobile phones', description: 'very good phone' ,quantity : 1},
    { name: 'phone', price: 17, imageUrl: '/assets/images/download (2).jpg', id: '8', category: 'mobile phones', description: 'very good phone' ,quantity : 1}
  ];

  localStorageValue: any[] = [];

  constructor(public home: HomeService, private toastr:ToastrService,private cartservice:CartService) {

  }

  ngOnInit(): void {
    this.getProducts();
    this.productQuantity = new FormGroup({
      'quantity' : new FormControl(null),
     
    })
  }

  // onClick(product: any) {
  //   this.home.Product.push(product)
  //   this.home.price.push(product.price)
  // }
  onClick(products: any) {
   
    this.clicked = true;

  }



  view(product: any) {
    this.home.price.push(product)
  }

  getProducts() {
    this.home.getItems().subscribe(
      (res: any) => {
        console.log(res);
        this.Product_data = res;
      }
    )
  }

  // add(products:any){
  //   let localStorageData = localStorage.getItem('product');
  
  //   if(products.quantity!=3){

  //     products.quantity += 1;
  //     if (localStorageData==null){
  //       let stroredData :any=[];
  //       stroredData.push(products);
  //       localStorage.setItem('product',JSON.stringify(stroredData))
  //   }
      

  //   }
  //   else{
  //     this.toastr.success("you've selected max quantity")
  //   }
  // }
  add(product:any){
    let localStorageData = localStorage.getItem('product');
    // this.home.Product.push(product);
    // this.home.price.push(product.price);
    
    product.quantity = this.productQuantity.value.quantity;
    // this.home.quantity.push(product.quantity)
    if (localStorageData==null){
        let stroredData :any=[];
        stroredData.push(product);
        localStorage.setItem('product',JSON.stringify(stroredData))
    }
    else{
      var prodid = product.id;
      let index:number = -1;
      this.localStorageValue = JSON.parse(localStorageData);
      for(let i=0; i<this.localStorageValue.length;i++){
        if(parseInt(prodid)===parseInt(this.localStorageValue[i].id)){
          this.localStorageValue[i].quantity = product.quantity;
          index=1;
          break;
        }
      }
      if(index==-1){
        this.localStorageValue.push(product);
        localStorage.setItem('product',JSON.stringify(this.localStorageValue));
      }
      else{
        localStorage.setItem('product',JSON.stringify(this.localStorageValue));
      }
    }
    this.cartProducts();
  }

  // remove(products:any){
   
  //   if(products.quantity !=1){
  //     products.quantity -= 1;
  //     localStorage.removeItem('product')
      
  //   }else{
  //     this.clicked = false
     
  //   }
  cartnumber : number = 0;
  
  cartProducts(){
    
   
    var cartitem = JSON.parse(localStorage.getItem('product') || '{}')
    this.cartnumber = cartitem.length;
    this.cartservice.cartSub.next(this.cartnumber)
    console.log("printing cart number",this.cartnumber)
 
   

}
}
