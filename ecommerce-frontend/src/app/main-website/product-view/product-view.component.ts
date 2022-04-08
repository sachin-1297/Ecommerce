import { Component, OnInit , Input} from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {HomeService} from '../services/home.service'

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  starRating = 3; 
  constructor(private home:HomeService) {
      
   }

  ngOnInit():  void {
  }
  onClick(product: any) {
    this.home.Product.push(product)
    this.home.price.push(product.price)
  }
}
