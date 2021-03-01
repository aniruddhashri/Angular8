import { Component, OnInit,Inject } from '@angular/core';
import {Router} from  '@angular/router'
import {SharedServiceService} from '../../Services/shared-service.service'
import {loginschema} from './loginschema'
import { LoginrespfrmDB,Data1 } from './loginrespfrmDB';
import {MatDialog} from '@angular/material/dialog';
import {DialogalertComponent} from '../dialogalert/dialogalert.component'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  userLoginForm:FormGroup
  email1:FormControl
  password1:FormControl

  constructor(private _router:Router,private service:SharedServiceService,public dialog: MatDialog,private formBuilder: FormBuilder) { }
  ngOnInit() {
  this.userLoginForm = this.formBuilder.group({
  email: new FormControl('', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  password1: new FormControl('', Validators.required)
})

  }

  register()
  {
    this._router.navigateByUrl('/'+this.service.jsonData[0].register)
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
          
          if(this.loginresp.status == "200")
          {
            this.service.userloggedon=true
            if(this.loginresp.Data.usertype == "customer")
            {
              this._router.navigateByUrl('/'+this.service.jsonData[0].customer)
            }
            else if(this.loginresp.Data.usertype == "manager")
            {
              this._router.navigateByUrl('/'+this.service.jsonData[0].manager)
            }
          } 
          else
          {
            this.service.userloggedon=false
            this.dialog.open(DialogalertComponent, {
              width: '650px',
              height: '160px',
              data: {Message: this.loginresp.error,errorstatus:true}}
              );
            //this.errorMessage = this.loginresp.error
          }
      })
      err=>{
        this.dialog.open(DialogalertComponent, {
          width: '650px',
          height: '160px',
          data: {Message: this.loginresp.error,errorstatus:true}}
          );
        this.errorMessage = this.loginresp.error
      }
  }
  
  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
  }

}
  


 

