import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router'
import {SharedServiceService} from '../../Services/shared-service.service'
import {loginschema} from './loginschema'
import { LoginrespfrmDB,Data1 } from './loginrespfrmDB';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  rdusertype:string;
  valid:boolean = false;
  errorMessage:String = ""

  loginsch : loginschema
  logininput :string
  loginresp : LoginrespfrmDB

data1:Data1[]
usertype : String 
  isTextFieldType: boolean = false;

  constructor(private _router:Router,private service:SharedServiceService) { }
  ngOnInit() {

  }

  register()
  {
    this._router.navigateByUrl('/register')
  }

  login()
  {
      this.loginsch = {
      email: this.email,
      password : this.password
    }
      this.service.login(this.loginsch).subscribe(
        data=>{
          this.loginresp = data;
          localStorage.setItem('isLoggedIn','true'); 
          
          if(this.loginresp.status == "200")
          {
            if(this.loginresp.Data.usertype == "customer")
            {
              this._router.navigateByUrl('/customer')
            }
            else if(this.loginresp.Data.usertype == "manager")
            {
              this._router.navigateByUrl('/admin')
            }
          } 
          else
          {
            this.errorMessage = this.loginresp.error
          }
      })
      err=>{
        this.errorMessage = this.loginresp.error
      }
  }

  
  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
  }
  }

 

