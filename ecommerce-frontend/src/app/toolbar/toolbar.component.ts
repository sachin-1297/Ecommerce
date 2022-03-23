import { Component, Input, OnInit , ViewChild,AfterViewInit, ElementRef, HostListener} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from "../login/login.component"
import {ContactComponent} from "../contact/contact.component"
import { AuthService } from '../services/auth.service';

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
  constructor(public dialog: MatDialog,private auth:AuthService) {
  
   
    this.auth.userName.subscribe(res=>{
      this.userName = res;
      if(res){
        this.isLoggedIn =true;
      }else{
        this.isLoggedIn = false;
      }
    })
   }

  ngOnInit(): void {
  
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
}
