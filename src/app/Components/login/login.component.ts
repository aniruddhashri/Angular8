import { Component, OnInit,Inject } from '@angular/core';
import {Router} from  '@angular/router'
import {SharedServiceService} from '../../Services/shared-service.service'
import {loginschema} from './loginschema'
import { LoginrespfrmDB,Data1 } from './loginrespfrmDB';
import {MatDialog} from '@angular/material/dialog';
import {DialogalertComponent} from '../dialogalert/dialogalert.component'
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

  

  constructor(private _router:Router,private service:SharedServiceService,public dialog: MatDialog) { }
  ngOnInit() {}

  register()
  {
    this._router.navigateByUrl('/register')
  }

   openDialog() 
   {
    const dialogRef = this.dialog.open(DialogalertComponent, {
    width: '650px',
    data: {email: this.email}}
    );

    dialogRef.afterClosed().subscribe(result => {
    });
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
            if(this.loginresp.Data.usertype == "customer")
            {
              this._router.navigateByUrl('/customer')
            }
            else if(this.loginresp.Data.usertype == "manager")
            {
              this._router.navigateByUrl('/manager')
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
  


 

