import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [{path:'', component:HomeComponent },
{path:'home', component:HomeComponent },
{path:'login', component:LoginComponent},
{path:'cart',component:CartComponent},
{path:'contact',component:ContactComponent},
{path:'about',component:AboutComponent},
{path:'signup',component:SignupComponent},
{path:'cart/payment',component:PaymentGatewayComponent},
{path:'product',component:ProductViewComponent},];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }