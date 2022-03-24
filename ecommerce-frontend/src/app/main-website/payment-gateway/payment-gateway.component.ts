import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import {MatDialog} from '@angular/material/dialog';
import {AddressDiagComponent} from '../address-diag/address-diag.component';
@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.scss']
})
export class PaymentGatewayComponent implements OnInit {

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
  }

}
