import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component'
import {AdminLoginComponent} from './admin-login/admin-login.component'
import {GuardGuard} from './services/guard.guard';

const routes: Routes = [
{path:'' , component:AdminLoginComponent,},
{path:'admin-page', canActivate:[GuardGuard], component: AdminComponent},
{path:'admin-login',component:AdminLoginComponent}
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }