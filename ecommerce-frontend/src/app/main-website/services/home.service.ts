import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  Product: any[] = [

  ];
  price: any[] = [

  ]
    ;
  public productList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {

  }

  getItems() {
    return this.http.get('http://localhost:8081/product/getAll');
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.price.map((a: any) => {
      grandTotal += a;
    })
    return grandTotal;
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
