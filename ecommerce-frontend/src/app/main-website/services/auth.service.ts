import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userName = new Subject<string>();
  readonly APIUrl = environment.apiUrl;
  constructor(private http:HttpClient) {

  }
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

 signup(userData :any){
   return this.http.post('http://localhost:3000/userMgmt/users/register',userData)
 }

 login(userData:any){
   return this.http.post('http://localhost:3000/userMgmt/users/login',userData)
 }
 
 contact(val:any){
  return this.http.post(this.APIUrl + '/contact/',val);
}
}

