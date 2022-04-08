import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AdminService} from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  
  constructor(private adminservice:AdminService, private router:Router){

  }

  canActivate(){
    if (this.adminservice.adminLoggedIn()){
      return true;
    }
    alert('You have not logged in')
    this.router.navigate(['/admin/admin-login'])
    return false;
  }
}
