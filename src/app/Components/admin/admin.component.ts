import { Component, OnInit } from '@angular/core';
import { LoginrespfrmDB} from '../login/loginrespfrmDB';
import {SharedServiceService} from '../../Services/shared-service.service'
import { Router } from '@angular/router';
import {Menulistschema} from './Schemas/menulistschema'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username:String;
  address:String;
  mblno:String;
  email:String;
  userdata1:LoginrespfrmDB

  dishname:String
  price:Number;
  dishimage:File

 menudatareq:any
 menudataresp:any[]=[]
 menuoninit:any[]=[]
  responseMessage: any;

  menulistschema:Menulistschema
  toggle1:boolean = true

  constructor(private _router:Router,private sharedser: SharedServiceService) { }

  ngOnInit() {
    try{
    
   const menuresp = this.sharedser.fetchmenu().subscribe(
     (resp)=>{
      this.menudataresp = resp.dish
    })
    
    }
    catch{}
  }

  deleterow(i)
  {
    var delBtn = confirm("Do you want to delete ?");
    if ( delBtn == true ) {
    this.sharedser.deletemenu(this.menudataresp[i].dishname).subscribe(
        menuresp =>{
          this.responseMessage = menuresp.msg;
          this.menudatareq = ""
          if(menuresp.status == 200)
          this.menudataresp.splice(i, 1 );
          this.responseMessage = ""
        })}  
  }


  logout()
  {
    if(confirm('Session will be Terminated, Are You sure want to Logout'))
    {
    this.sharedser.logout();
    this._router.navigateByUrl('/');
    }

  }

  AddMenu()
  {
    this.menudatareq = ({dishname:this.dishname,price: this.price.toString()})

    this.sharedser.addmenu(this.menudatareq).subscribe(
      menuresp =>{
        this.responseMessage = menuresp.msg;
        this.menudatareq = ""
        if(menuresp.status == 200)
        this.menudataresp.push({dishname:this.dishname,price: this.price.toString()});
      }
    )
  }

   route(path)
  {
    this._router.navigateByUrl(path)
  }

  toggle()
  {
    this.toggle1 = ! this.toggle1
  }
}
