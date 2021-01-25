import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Components/login/login.component'
import { CustomerComponent } from './Components/customer/customer.component';
import { AdminComponent } from './Components/admin/admin.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { AboutComponent } from './Components/about/about.component';
import { CartComponent } from './Components/cart/cart.component';
import { LandingComponent } from './Components/landing/landing.component'
import {  PagenotfoundComponent} from './Components/pagenotfound/pagenotfound.component'

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'manager',component:AdminComponent},
  {path:'customer',component:CustomerComponent},
  {path:'cart',component:CartComponent},
  {path:'register',component:RegistrationComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
