import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {LoginComponent} from './Components/login/login.component'
import { CustomerComponent } from './Components/customer/customer.component';
import { AdminComponent } from './Components/admin/admin.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { AboutComponent } from './Components/about/about.component';
import { CartComponent } from './Components/cart/cart.component';
 import { LandingComponent } from './Components/landing/landing.component'
 import {  PagenotfoundComponent} from './Components/pagenotfound/pagenotfound.component'
//import { MatDataFilterComponent } from "./Components/mat-data-filter/mat-data-filter.component";
import { HttpClient } from '@angular/common/http';
import { SharedServiceService } from './Services/shared-service.service';


const routes: any = [
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
  {path:'landing' ,component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'manager',component:AdminComponent},
  {path:'customer',component:CustomerComponent},
  {path:'cart',component:CartComponent},
  {path:'register',component:RegistrationComponent},
  {path:'about',component:AboutComponent},
//  {path:'matCompo',component:MatDataFilterComponent},
  {path:'**',component:PagenotfoundComponent},
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

  jsonData:any[] = []
  constructor(private _router:Router, private httpClient: HttpClient, private sharedsrv:SharedServiceService,route:ActivatedRoute) { 

    try{
      this.httpClient.get("../env.json").toPromise().then((response : any) => {
      this.jsonData.push(response)
      this.sharedsrv.jsonData = this.jsonData

      if(this.sharedsrv.userloggedon==false)
      {
      this._router.navigateByUrl(this.jsonData[0].landing) 
      }
     
    const routes: any = [
  {path:'',   redirectTo: '/'+this.jsonData[0].login, pathMatch: 'full' },  
  {path:this.jsonData[0].landing,component:LandingComponent},
  {path:this.jsonData[0].login,component:LoginComponent},
  {path:this.jsonData[0].manager,component:AdminComponent},
  {path:this.jsonData[0].customer,component:CustomerComponent},
  {path:this.jsonData[0].cart,component:CartComponent},
  {path:this.jsonData[0].register,component:RegistrationComponent},
  {path:this.jsonData[0].about,component:AboutComponent},
  {path:'**',component:PagenotfoundComponent}, 
  
    ];
    
    RouterModule.forRoot(routes)

    try{
    this._router.resetConfig(routes);
    this._router.config.push(routes);
  }
  catch(e){}
})
  }
  catch(e)
  {}
  } 
}
