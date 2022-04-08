import { Component, Input, OnInit , ViewChild,AfterViewInit, ElementRef, HostListener} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from "../../auth/login/login.component"
import {ContactComponent} from "../../auth/contact/contact.component"
import { AuthService } from '../../services/auth.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('stickyMenu') menuElement: ElementRef;
  isLoggedIn = false;
  userName: string;
  details:any;
  sticky = false;
  menuPosition: any;
  elementPosition: any;
  cartItem :number = 0;

  constructor(public dialog: MatDialog,private auth:AuthService,private cartservice:CartService) {
  
   
    this.auth.userName.subscribe(res=>{
      this.userName = res;
      if(res){
        this.isLoggedIn =true;
      }
      else{
        this.isLoggedIn = false;
      }
    });
    
    this.cartservice.cartSub.subscribe((data)=>{
      this.cartItem = data;
    });

   }

  ngOnInit(): void {
      this.cartProducts();
  }

  ngAfterViewInit(){
    
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
       this.details = `Dialog result: ${result}`
      console.log(this.details);
    });

}

openDialogs() {
  const dialogRef = this.dialog.open(ContactComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });

}

logout(){
  this.isLoggedIn = false;
}

cartProducts(){
  var cartitem = localStorage.getItem('product');
  if(cartitem != null){
    var cartCount = JSON.parse(cartitem);
    console.log(cartCount);
    this.cartItem = cartCount.length;
   
  }
}

}
