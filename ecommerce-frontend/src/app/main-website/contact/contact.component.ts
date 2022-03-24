import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  email = new FormControl('', [Validators.required, Validators.email]);
  contactusForm:FormGroup;
  constructor(private auth:AuthService) { 
    
  }

  ngOnInit() {
    this.contactusForm = new FormGroup({
      'name' : new FormControl(null),
      'email' : new FormControl(null,Validators.email),
      'textarea' : new FormControl(null)
    })
  }
  onSubmit(){
    console.log(this.contactusForm.value)
    this.auth.contact(this.contactusForm.value).subscribe(
      res  =>{
        console.log(res)
      }
    )
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
