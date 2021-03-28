import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Router} from  '@angular/router'
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '..//admin/admin.component';
import { CustomerComponent } from '../customer/customer.component';
import { CartComponent } from '..//cart/cart.component';
import { RegistrationComponent } from '../registration/registration.component';
import { AboutComponent } from '../about/about.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import $ from "jquery"
import {SharedServiceService} from "../../Services/shared-service.service"
import { HttpClient } from "@angular/common/http";
import disableDevtool from 'disable-devtool';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})



export class LandingComponent implements OnInit {
 // @ViewChild('fileUploader',{static:false}) fileUpobj:ElementRef


  filepath:string = "../../../assets/Demo.mp4"
  format: string;
  url: any | [];
  loginurl:string 
  regURL:string 
  jsonData:any[] = []
  
  constructor(private _router:Router, private httpClient: HttpClient, private sharedsrv:SharedServiceService) { 
    // disableDevtool({
    //   ondevtoolopen(){
    //   alert("Developer tool not allowed")
    //   window.location.href = "Notallowed.html"
      // this._router.navigateByUrl('/login')
    //   }
    // })
    
  } 

  getrouting() {
    try{
    this._router.resetConfig([
  {path:'',   redirectTo: '/'+this.jsonData[0].landing, pathMatch: 'full'},
  {path:this.jsonData[0].landing,component:LandingComponent},
  {path:this.jsonData[0].login,component:LoginComponent},
  {path:this.jsonData[0].manager,component:AdminComponent},
  {path:this.jsonData[0].customer,component:CustomerComponent},
  {path:this.jsonData[0].cart,component:CartComponent},
  {path:this.jsonData[0].register,component:RegistrationComponent},
  {path:this.jsonData[0].about,component:AboutComponent},
  {path:'**',component:PagenotfoundComponent}, 
    ]);
  }
  catch(e){
  }
  }
  
  ngOnInit() {    
     this.httpClient.get("../../../env.json").toPromise().then((response : any) => {
    this.jsonData.push(response)
    this.sharedsrv.jsonData = this.jsonData
        })
 
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', this.filepath, true);
//         xhr.responseType = 'blob'; //important
//         xhr.onload = function(e) {
//             if (this.status == 200) {
//                 var blob = this.response;
//                 var x = document.createElement("VIDEO");

// x.setAttribute("src",URL.createObjectURL(blob));
// x.setAttribute("width", "320");
// x.setAttribute("height", "240");
// x.setAttribute("controls", "controls");
// x.setAttribute("id", "vdrsrc");
// // x.setAttribute("autoplay","autoplay")
// x.setAttribute("controlsList","nodownload")
// x.setAttribute("disablepictureinpicture","true")
// document.getElementById('parentdiv').appendChild(x);

//                 var  video = document.getElementById('vdrsrc');
//                 video.oncanplaythrough = function() {
//                     console.log("Can play through video without stopping");
//                 };
//             }
//         };
//         xhr.send();
  }

  savetoserver(){
    var file:File = (<HTMLInputElement>document.getElementById('fileUploader')).files[0];
    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
      
      var x = document.createElement("VIDEO");

      x.setAttribute("src",myReader.result.toString());
      x.setAttribute("width", "320");
      x.setAttribute("height", "240");
      x.setAttribute("style", "margin:15px");
      x.setAttribute("controls", "controls");
      x.setAttribute("controlsList","nodownload")
      x.setAttribute("disablepictureinpicture","true")
      document.getElementById('parentdiv').appendChild(x);
    }
    myReader.readAsDataURL(file);

  }


  handleFileInput($event) : void {
    var file:File = $event.target.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      
      var x = document.createElement("VIDEO");

      x.setAttribute("src",myReader.result.toString());
      x.setAttribute("width", "320");
      x.setAttribute("height", "240");
      x.setAttribute("style", "margin:15px");
      x.setAttribute("controls", "controls");
      x.setAttribute("controlsList","nodownload")
      x.setAttribute("disablepictureinpicture","true")
      document.getElementById('parentdiv').appendChild(x);
    }
    myReader.readAsDataURL(file);
    $event.srcElement.value = null;
  }
  
  login()
  {
    this._router.navigateByUrl('/'+this.jsonData[0].login)
  }
  register()
  {
    this._router.navigateByUrl('/'+this.jsonData[0].register)
  }

}
