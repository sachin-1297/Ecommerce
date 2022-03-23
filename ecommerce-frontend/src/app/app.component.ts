import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from './services/auth.service';
import{LoginComponent} from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  
  title = 'traininglsn1';
  constructor() { }
ngOnInit(){
  // this.auth.autoSignin();
} 

}


