import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import {AppRoutingModule} from "./app-routing.module"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle1:boolean = true

  constructor(private route1:Router){}
  //constructor(private route1:Router,public routemod:AppRoutingModule){}

   route(path)
  {
    this.route1.navigateByUrl(path)
  }
  
  toggle()
  {
    this.toggle1 = ! this.toggle1
  }

}
  