import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
 
  adminloginForm:FormGroup;
  hide = true;
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(16)
  ]);
  constructor(private _formBuilder: FormBuilder,private auth:AuthService,private router: Router) { }

  ngOnInit(): void {
    this.adminloginForm = new FormGroup ({
      'username': new FormControl(null),
      'password' : new FormControl(null)
    })
  }
  onSubmit(): void {
    if (this.adminloginForm.valid) {
      this.auth.adminlogin(this.adminloginForm.value).subscribe(
        (result) => {
         
          console.log(result);
          this.router.navigate(['/admin']);
          this.auth.adminLoggedIn=true;
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
