import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProduct: FormGroup;
  url: any;
  file: File;

  constructor(private adminSerivce: AdminService) {
    this.addProduct = new FormGroup({
      name: new FormControl(null, Validators.required),
      // id: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
    })
  }

  ngOnInit(): void { }

  add() {
    const objProduct: FormData = new FormData();
    objProduct.append('productData', JSON.stringify(this.addProduct.value));
    objProduct.append('file', this.file);
    this.adminSerivce.addProduct(objProduct).subscribe(res => console.log(res));
  }

  onselectFile(e: any) {
    if (e.target.files) {
      /* let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any)=>{
        this.url = event.target.result;
      } */
      this.file = e.target.files[0];
    }
  }

}
