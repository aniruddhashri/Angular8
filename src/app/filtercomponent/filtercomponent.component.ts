import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {SharedServiceService} from "../Services/shared-service.service"
import {CustomerComponent} from "../Components/customer/customer.component"
@Component({
  selector: 'app-filtercomponent',
  templateUrl: './filtercomponent.component.html',
  styleUrls: ['./filtercomponent.component.css']
})
export class FiltercomponentComponent {
dishname : string =""
price : any = ""

custref1:CustomerComponent
@Output() myEvent = new EventEmitter();
  constructor(private sharedsrv : SharedServiceService) { }

  applyFilter() {
    this.myEvent.emit({dishname: this.dishname,price:this.price});
}

}