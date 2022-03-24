import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from "../login/login.component"
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
  
})

export class SignupComponent implements OnInit {
  userName: any;
  signupForm:FormGroup;
  isLinear = false;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(16)
  ]);
  checked = false;
  isEditable = false;
  constructor(public dialog: MatDialog,private auth:AuthService,private _formBuilder: FormBuilder,private _snackBar: MatSnackBar,private toastr: ToastrService,private router: Router) {
  
   
   }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      'username' : new FormControl(null),
      'email' : new FormControl(null,Validators.email),
      'password' : new FormControl(null, [Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
      'address' : new FormControl(null),
      'phone' : new FormControl(null),
      'dob' : new FormControl(null),
      'pin' : new FormControl(null),
    });

  } 
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

}
getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'You must enter a value';
  }
  return this.email.hasError('email') ? 'Not a valid email' : '';
}
getErrorMsg() {
  if (this.password.hasError('required')) {
    return 'You must enter a value';
  }
  if (this.password.hasError('minLength()')) {
    return 'You must enter atleast 8 characters';
  }
  if (this.password.hasError('maxLength')) {
    return 'Password must be of max 16 characters';
  }
  return this.password.hasError('password') ? 'Not a valid password ' : '';
}
signup(){
  
  console.log(this.signupForm.value)
  if (this.signupForm.valid){
    this.auth.signup(this.signupForm.value).subscribe(
      res => {
      console.log(res)
      this.toastr.success('Successfully Signup . Please login to continue')
    
    })
    }

    }
  
 


 
  
  
//   this.signupForm = this._formBuilder.group({
//     firstCtrl: ['', Validators.required],
//   });
//   this.signupForm = this._formBuilder.group({
//     secondCtrl: ['', Validators.required],
//   }); 
}

