import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SharedServiceService} from '../../Services/shared-service.service'
import {regschema} from './regschema'
 import {respfromDB} from './resp'



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
 
  username:string= '';
  password:string= '';
  cnfpassword:string= '';
  address:string= '';
  mblno:string= '';
  email:string= '';
// ngForm = new FormGroup({
//   username : new FormControl('', [Validators.required]),
//     password : new FormControl('', [Validators.required]),
//     cnfpassword : new FormControl('', [Validators.required]),
//     address : new FormControl('', [Validators.required]),
//     mblno : new FormControl('', [Validators.required]),
//     email : new FormControl('', [Validators.required]),
//   })

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
      usertype:"customer"
    }
   
   this.sharedsvc.register(this.regsch)
   .subscribe(
     data=>{
      this.response = data;
      this.message = this.response.msg
   })
  }
}
