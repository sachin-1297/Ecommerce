import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import {AddProductComponent} from '../add-product/add-product.component';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public products : any =[
    {index:1,name:'MobilePhone',category:'phone', id:12, price:111,description:'very good phone',imageUrl:'/assets/images/download (2).jpg'},
  ]

  constructor(private router:Router,private toastr: ToastrService,public dialog: MatDialog, private adminService: AdminService) { }

  ngOnInit(): void {
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(AddProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
  // adminIn(){
  //   if(this.auth.adminLoggedIn){
  //     this.toastr.error('Please login to continue')
  //     this.router.navigate(['/admin-login']);
  //   }

  // }


