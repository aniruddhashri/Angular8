import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedServiceService} from '../../Services/shared-service.service'
import {regschema} from './regschema'
 import {respfromDB} from './resp'



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  //regsch:regschema;

  username:string;
  password:string;
  cnfpassword:string;
  address:string;
  mblno:string;
  email:string;
  rdusertype:string

  message:string

  response:respfromDB;
  regsch:regschema 

  constructor(private sharedsvc : SharedServiceService,private _router:Router) { }

  ngOnInit() {
  }
  login()
  {
    this._router.navigateByUrl('/'+this.sharedsvc.jsonData[0].login)
  }
  register()
  {
    this.regsch = {
      username:this.username,
      password:this.password,
      address:this.address,
      mobile:this.mblno,
      email:this.email,
      usertype:this.rdusertype
    }
    console.log(this.regsch)
   
   this.sharedsvc.register(this.regsch)
   .subscribe(
     data=>{
      this.response = data;
      console.log(this.response)
      this.message = this.response.msg
   })

  }

}
