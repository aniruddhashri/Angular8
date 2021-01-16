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


  constructor(private sharedser: SharedServiceService) { }

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
  }

  addtocart(cart){

  }
}