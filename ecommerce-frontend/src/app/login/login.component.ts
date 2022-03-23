import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import{SignupComponent} from "../signup/signup.component"
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  userName:any;
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(16)
  ]);
  isRemember: any;
  checked = false;
  constructor(public dialog: MatDialog,private auth:AuthService,private _formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    
  
  this.loginForm = new FormGroup ({
      'email': new FormControl(null),
      'password' : new FormControl(null)
    })
  }
 
  showAlert(){
    alert("showing alert")
  }
  openDialog() {
    const dialogRef = this.dialog.open(SignupComponent);
    
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
ischecked(event: { checked: any; }) {
  if (event.checked) {
    this.isRemember = true;
  } else {
    this.isRemember = false;
  }
}

login(){
 
  console.log(this.loginForm.value)
  
    this.auth.login(this.loginForm.value).subscribe(
    res  =>{
      console.log(res)
      let response = res as any;
      this.auth.userName.next(response.userData.user.username);
      this.router.navigate(['home']);
      if(this.isRemember == true){
        localStorage.setItem('UserData', JSON.stringify(res));
        
    }else{
      return;
    }
  }
);
  

}
autoSignin(){
  const userData = JSON.parse(localStorage.getItem('UserData') || '{}');
  console.log(userData)  
  if(!userData){
    return;
  } else{
  // const loggedInUser = new LoginComponent(userData.email,userData.password,userData.token,userData.username)
  // return loggedInUser;
  
  }
  
}
}
// datatypes in js , diff b/w js & ts (why ts is preferred over js, bindings)