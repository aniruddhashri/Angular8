import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  login()
  {
    this._router.navigateByUrl('/login')
  }
  register()
  {
    this._router.navigateByUrl('/register')
  }

}
