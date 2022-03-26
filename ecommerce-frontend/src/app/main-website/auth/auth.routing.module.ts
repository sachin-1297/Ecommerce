import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from '../auth/login/login.component';
import {SignupComponent} from '../auth/signup/signup.component'
import {ContactComponent} from '../auth/contact/contact.component';


const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'contact',component:ContactComponent},
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }


