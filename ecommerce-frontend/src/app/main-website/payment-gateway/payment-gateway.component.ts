import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import {MatDialog} from '@angular/material/dialog';
import {AddressDiagComponent} from '../dialogues/address-diag/address-diag.component';
@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.scss']
})
export class PaymentGatewayComponent implements OnInit {

  checked = false;
  public products : any = [

  ];

  constructor(public dialog: MatDialog) { 
    render(
      {
          id: "#payments",
          currency: "USD",
          value: "100.00",
          onApprove: (details) => {
      
          }
        }
      );
  }
  openDialog() {
    this.dialog.open(AddressDiagComponent);
  }

  ngOnInit(): void {
    this.itemsCart();
    this.grandTotal();
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

}
