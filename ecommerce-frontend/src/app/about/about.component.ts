import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private http:HttpClient) { }
  obj:any;

  ngOnInit(): void {
    this.obj =  this.http.get('http://127.0.0.1:8000/shop/').subscribe(data=>this.obj=data)
    console.log(this.obj)
  }

}
