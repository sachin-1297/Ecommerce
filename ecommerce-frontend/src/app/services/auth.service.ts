import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName = new Subject<string>();
  adminLoggedIn=false;
  readonly APIUrl = "http://127.0.0.1:8000";
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
adminlogin({ username, password }: any): Observable<any> {
  if (username === 'admin' && password === 'admin123') {
    this.setToken('abcdefghijklmnopqrstuvwxyz');
    return of({ name: 'Admin'});
  }
  return throwError(new Error('Failed to login'));
}
addProduct(product_data:any){
  return this.http.post('http://localhost:8081/add',product_data)
}
updateProduct(product_data:any){
  return this.http.put("http://localhost:8081/update",product_data)
}
}

