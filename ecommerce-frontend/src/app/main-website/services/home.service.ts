import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  Product: any[] = [

  ];
  
  price: any[] = [

  ];
  quantity:any[]=[

  ];

  readonly APIurl = environment.apiUrl
  public productList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {

  }

  getItems() {
    return this.http.get(this.APIurl +'/product/getAll');
  }

  getTotalPrice(): any {


   
  }

  removeCartItem(product: any) {
    this.Product.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.Product.splice(index, 1);
      }
    })
    this.productList.next(this.Product);
  }

}
