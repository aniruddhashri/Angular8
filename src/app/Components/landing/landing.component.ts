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
  
  constructor(private _router:Router, private httpClient: HttpClient, private sharedsrv:SharedServiceService) { } 


  getrouting() {
    try{
    this._router.resetConfig([
  {path:'',   redirectTo: '/'+this.jsonData[0].landing, pathMatch: 'full' },
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
        
  $('fileup').attr('src',this.filepath)

  var request = new XMLHttpRequest();
  request.open('GET', this.filepath, true);
  request.responseType = 'blob';
  request.onload = function() {
  var reader = new FileReader();
  
  reader.readAsDataURL(request.response);
  reader.onload =  function(e){
  const dataurl = (e.target as any).result

  var x = document.createElement("VIDEO");

x.setAttribute("src",dataurl);
x.setAttribute("width", "320");
x.setAttribute("height", "240");
x.setAttribute("controls", "controls");
// x.setAttribute("autoplay","autoplay")
x.setAttribute("controlsList","nodownload")
x.setAttribute("disablepictureinpicture","true")
document.getElementById('parentdiv').appendChild(x);

    };
};
request.send();

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
