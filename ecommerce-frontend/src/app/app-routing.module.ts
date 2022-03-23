import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-website/home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './main-website/about/about.component';
import { SignupComponent } from './signup/signup.component';
import {PaymentGatewayComponent} from './payment-gateway/payment-gateway.component'
import {ProductViewComponent} from './product-view/product-view.component';

const routes: Routes = [
{path:'', loadChildren: () => import('./main-website/main-website.module').then((m) => m.MainWebsiteModule)},
{path:'main', loadChildren: () => import('./main-website/main-website.module').then((m) => m.MainWebsiteModule)},
{path:'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
