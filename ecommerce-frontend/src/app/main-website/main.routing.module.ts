import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CartComponent } from "./cart/cart.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { MainComponent } from "./main.component";
import { PaymentGatewayComponent } from "./payment-gateway/payment-gateway.component";
import { ProductViewComponent } from "./product-view/product-view.component";
import { SignupComponent } from "./auth/signup/signup.component";


const routes: Routes = [
    {path:'', component: MainComponent, children: [
        {path:'', component:HomeComponent },
        {path:'home', component:HomeComponent },
        {path:'login', component:LoginComponent},
        {path:'cart',component:CartComponent},
        {path:'contact',component:ContactComponent},
        {path:'about',component:AboutComponent},
        {path:'signup',component:SignupComponent},
        {path:'cart/payment',component:PaymentGatewayComponent},
        {path:'product',component:ProductViewComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }