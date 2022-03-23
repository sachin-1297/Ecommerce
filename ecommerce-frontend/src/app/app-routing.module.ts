import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import {PaymentGatewayComponent} from './payment-gateway/payment-gateway.component'
import {ProductViewComponent} from './product-view/product-view.component';

const routes: Routes = [{path:'', component:HomeComponent },
{path:'home', component:HomeComponent },
{path:'login', component:LoginComponent},
{path:'cart',component:CartComponent},
{path:'contact',component:ContactComponent},
{path:'about',component:AboutComponent},
{path:'signup',component:SignupComponent},
{path:'cart/payment',component:PaymentGatewayComponent},
{path:'product',component:ProductViewComponent},
{path:'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
