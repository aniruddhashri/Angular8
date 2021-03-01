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

  testdata:String[] =[]

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  filtereddata : any = ""
  dishnameflr: any ="";
  priceflr: any ="";
  filterobj:any = ""

  

  constructor(public sharedser: SharedServiceService,public _router:Router) { }

  callFunction(e) {
    this.dishnameflr = e.dishname;
    this.priceflr = e.price
    this.filterobj = {dishname:e.dishname,price:e.price}
  }
  ngOnInit() {
    try{ 
    this.userdata1 = this.sharedser.userdata
    this.username = this.userdata1.Data.username
        const menuresp = this.sharedser.fetchmenu().subscribe((resp)=>{
        this.menudata1 = resp.dish
       })
       }
       catch(ex)
       {
        const menuresp = this.sharedser.fetchmenu().subscribe((resp)=>{
        this.menudata1 = resp.dish
       })
       }
       try{

        this.sharedser.getFilteredInfo().subscribe((resp)=>{
          this.filtereddata = resp
          })
       }
       catch(e1)
       {}
  }

  addtocart(i)
  {
    this.sharedser.cartdata.push(i)
  }

  viewcart()
  {
    this._router.navigateByUrl('/cart')
  }
} 