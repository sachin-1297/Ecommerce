import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CartComponent } from "./cart/cart.component";
import { ContactComponent } from "./auth/contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main.component";
import { PaymentGatewayComponent } from "./payment-gateway/payment-gateway.component";
import { ProductViewComponent } from "./product-view/product-view.component";



const routes: Routes = [
    {path:'', component: MainComponent, children: [
        {path:'', component:HomeComponent },
        {path:'home', component:HomeComponent },
        {path:'', loadChildren: () => import('../main-website/auth/auth.module').then((m) => m.AuthModule)},
        {path:'cart',component:CartComponent},
        {path:'about',component:AboutComponent},
        {path:'cart/payment',component:PaymentGatewayComponent},
        {path:'product',component:ProductViewComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }