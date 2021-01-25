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
  constructor(public sharedsrv:SharedServiceService,private _router:Router) { }

  ngOnInit() {
this.cartData = this.sharedsrv.cartdata
  }

  backtomain()
  {
    this._router.navigateByUrl(this.sharedsrv.userdata.Data.usertype)
  }

}
