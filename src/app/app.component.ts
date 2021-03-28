import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SharedServiceService } from './Services/shared-service.service';
import { HttpClient } from '@angular/common/http';

//import {AppRoutingModule} from "./app-routing.module"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle1:boolean = true
  
  constructor(private route1:Router){}


   route(path)
  {
    this.route1.navigateByUrl(path)
  }
  
  toggle()
  {
    this.toggle1 = ! this.toggle1
  }

}
  