import { Component, OnInit } from '@angular/core';
import {HomeService} from '../services/home.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  Product_data:any[] = [
      {name:'phone',price:10,imageUrl:'/assets/images/download (2).jpg',id:'1',category:'mobile phones',description:'very good phone'},
      {name:'phone',price:11,imageUrl:'/assets/images/download (2).jpg',id:'2',category:'mobile phones',description:'very good phone'},
      {name:'phone',price:12,imageUrl:'/assets/images/download (1).jpg',id:'3',category:'mobile phones',description:'very good phone'},
      {name:'phone',price:13,imageUrl:'/assets/images/download (1).jpg',id:'4',category:'mobile phones',description:'very good phone'},
      {name:'phone',price:14,imageUrl:'/assets/images/images (2).jpg',id:'5',category:'mobile phones',description:'very good phone'},
      {name:'phone',price:15,imageUrl:'/assets/images/images (2).jpg',id:'6',category:'mobile phones',description:'very good phone'},
      {name:'phone',price:16,imageUrl:'/assets/images/download (2).jpg',id:'7',category:'mobile phones',description:'very good phone'},
      {name:'phone',price:17,imageUrl:'/assets/images/download (2).jpg',id:'8',category:'mobile phones',description:'very good phone'}
    ];


  constructor(public home:HomeService) { 

  }

  ngOnInit(): void {

  }
onClick(product:any){
  this.home.Product.push(product)
  this.home.price.push(product.price)

}
view(product:any){
  this.home.price.push(product)
}

}
