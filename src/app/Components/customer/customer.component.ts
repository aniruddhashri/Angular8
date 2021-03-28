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
  dishtype:String = ""

  

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

        for (let index = 0; index < this.menudata1.length; index++) {
          this.menudata1[index].totalPrice = this.menudata1[index].price 
          this.menudata1[index].indexvalue = index;
          try{
            this.menudata1[0].finalPrice = this.sharedser.cartdata[index].finalPrice
            this.menudata1[index].quantity = 0
        }
        catch(err){
          this.menudata1[0].finalPrice = 0 
          this.menudata1[index].quantity = 0
        }
        }

        for (let j = 0; j < this.sharedser.cartdata.length; j++) 
        {
          const index1 = this.menudata1.findIndex(x => x.dishname === this.sharedser.cartdata[j].dishname);
          this.menudata1[index1].quantity = this.sharedser.cartdata[j].quantity
        }

       })
       }
       catch(ex)
       {
        const menuresp = this.sharedser.fetchmenu().subscribe((resp)=>{
        this.menudata1 = resp.dish
        
        this.menudata1[0].finalPrice = 0

        for (let index = 0; index < this.menudata1.length; index++) {
          this.menudata1[index].totalPrice = this.menudata1[index].price 
          this.menudata1[index].indexvalue = index;
          try{
           
            this.menudata1[0].finalPrice = this.sharedser.cartdata[index].finalPrice
            this.menudata1[index].quantity = 0
          }
          catch(err){
            this.menudata1[0].finalPrice = 0 
            this.menudata1[index].quantity = 0
          }
        }

        for (let j = 0; j < this.sharedser.cartdata.length; j++) 
        {
          try{
          const index1 = this.menudata1.findIndex(x => x.dishname === this.sharedser.cartdata[j].dishname);
          this.menudata1[index1].quantity = this.sharedser.cartdata[j].quantity
        }
        catch(err){
          this.menudata1[0].finalPrice = 0 
          this.menudata1[j].quantity = 0
        }
        }
      
       })
       }
  }

  addtocart(i)
  {
    this.sharedser.cartdata.push(i)
  }

  changeQty(pid,qty){
    if(qty == -1 && this.menudata1[pid].quantity == 0)
    {
      this.menudata1[pid].quantity = 0
      return false;
    }

    if(this.sharedser.cartdata.length > 0)
    {
      try{
          const index = this.sharedser.cartdata.findIndex(x => x.dishname === this.menudata1[pid].dishname);
          const quantity = Number(this.sharedser.cartdata[index].quantity) + Number(qty) 
          this.sharedser.cartdata[index].quantity = quantity;
          this.menudata1[pid].quantity  = this.sharedser.cartdata[index].quantity;
        }
        catch(err){
          this.sharedser.cartdata.push(this.menudata1[pid])
          const index = this.sharedser.cartdata.findIndex(x => x.dishname === this.menudata1[pid].dishname);
          
          const quantity = Number(this.sharedser.cartdata[index].quantity) + Number(qty) 
          this.sharedser.cartdata[index].quantity = quantity;
          this.menudata1[pid].quantity  = this.sharedser.cartdata[index].quantity;
        }
    }
    else{
      this.sharedser.cartdata.push(this.menudata1[pid])
      const index = this.sharedser.cartdata.findIndex(x => x.dishname === this.menudata1[pid].dishname);
      const quantity = Number(this.sharedser.cartdata[index].quantity) + Number(qty) 
      this.sharedser.cartdata[index].quantity = quantity;
      this.menudata1[pid].quantity  = this.sharedser.cartdata[index].quantity;
    }
  
    if(this.menudata1[pid].quantity == 0){
        this.sharedser.cartdata.splice(pid, 1);
      }
  }
    
  viewcart()
  {
    this._router.navigateByUrl('/cart')
  }

} 