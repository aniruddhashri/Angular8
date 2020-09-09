import { Component, OnInit } from '@angular/core';
import { LoginrespfrmDB} from '../login/loginrespfrmDB';
import {SharedServiceService} from '../../Services/shared-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  username:String;
  address:String;
  mblno:String;
  email:String;
  menudata1:any[]=[]

  userdata1:LoginrespfrmDB
  constructor(private _router:Router,private sharedser: SharedServiceService) { }

  ngOnInit() {
    
    this.userdata1 = this.sharedser.userdata

    this.username = this.userdata1.Data.username
    try{
    
      const menuresp = this.sharedser.fetchmenu().subscribe((resp)=>{
         this.menudata1 = resp.dish
       })
       
       }
       catch{}
  }

  logout()
  {
    if(confirm('Session will be Terminated ,Are You sure want to Logout'))
    {
    this.sharedser.logout();
    this._router.navigateByUrl('/');
    }
  }

}
