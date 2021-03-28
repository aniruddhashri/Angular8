import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../../Services/shared-service.service'
import {Router} from  '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartData:any[]=[]
finalPrice:Number = 0 
  constructor(public sharedsrv:SharedServiceService,private _router:Router) { }

  ngOnInit() {
this.cartData = this.sharedsrv.cartdata
this.finalPrice = 0
for (let index = 0; index < this.cartData.length; index++) {
  const totalPrice = Number(this.cartData[index].price) * Number(this.sharedsrv.cartdata[index].quantity) 
  this.cartData[index].totalPrice = totalPrice
  this.sharedsrv.cartdata[index].totalPrice = totalPrice
  const finalPrice = Number(this.finalPrice) + Number(this.sharedsrv.cartdata[index].totalPrice)
  this.finalPrice = finalPrice
  if(this.sharedsrv.cartdata[index].quantity == 0)
  {
    this.cartData.splice(index, 1);
  }
}
  }

  checkout()
  {
    this._router.navigateByUrl("checkout")
  }
  deleterow(i)
  {
    var delBtn = confirm("Do you want to delete ?");
    if ( delBtn == true ) {

          this.cartData[i].totalPrice = Number(this.cartData[i].price) * Number(this.cartData[i].quantity)

          const finalPrice = Number(this.finalPrice) + (Number(this.cartData[i].price) * ( - Number(this.cartData[i].quantity)))
          this.finalPrice = Number(finalPrice)

          this.sharedsrv.cartdata[i].quantity = this.cartData[i].quantity;
          this.sharedsrv.cartdata[i].totalPrice = this.cartData[i].totalPrice;

          this.cartData.splice(i, 1);
    }  
  }

  changeQty(pid,qty){
    this.cartData[pid].quantity = this.cartData[pid].quantity + qty

    this.cartData[pid].totalPrice = Number(this.cartData[pid].price) * Number(this.cartData[pid].quantity)
    
    const finalPrice = Number(this.finalPrice) + (Number(this.cartData[pid].price) * Number(qty))
    this.finalPrice = Number(finalPrice)

    this.sharedsrv.cartdata[pid].quantity = this.cartData[pid].quantity;
    this.sharedsrv.cartdata[pid].totalPrice = this.cartData[pid].totalPrice;

    if(this.cartData[pid].quantity == 0){
      this.cartData.splice(pid, 1); 
    }
  }

  emptyCart(){
    if(confirm('Are You sure want to Clear Cart ?')){
      this.cartData = []
      this.sharedsrv.cartdata = [];
    }
  }
  backtomain()
  {
    try{
    this._router.navigateByUrl(this.sharedsrv.userdata.Data.usertype)
  }
    catch(err){
      this._router.navigateByUrl("/")
    }
  }

}
