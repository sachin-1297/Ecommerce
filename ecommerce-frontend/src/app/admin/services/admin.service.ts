import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminLoggedIn=false;

  constructor(private http:HttpClient) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  adminlogin({ username, password }: any): Observable<any> {
    if (username === 'admin' && password === 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Admin'});
    }
    return throwError(new Error('Failed to login'));
  }

  addProduct(product_data:any){
    return this.http.post('http://localhost:8081/product/add',product_data)
  }

  updateProduct(product_data:any){
    return this.http.put("http://localhost:8081/update",product_data)
  }
  
}
