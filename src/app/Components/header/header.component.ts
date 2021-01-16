import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/Services/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggle1:boolean = true
  checkifloggedon:boolean = false
  constructor(private _router:Router,private sharedser: SharedServiceService) { 
  }

  ngOnInit() {
    alert(this.sharedser.userloggedon)
  if(!this.sharedser.userloggedon==true)
  {
    this.sharedser.logout();
    this._router.navigateByUrl('/');
  }
  }
  toggle()
  {
    this.toggle1 = ! this.toggle1
  }

  
  route(path)
  {
    this._router.navigateByUrl(path)
  }

  route1()
  {
    this._router.navigateByUrl(this.sharedser.userdata.Data.usertype)
  }
  
  logout()
  {
    if(confirm('Session will be Terminated, Are You sure want to Logout'))
    {
    this.sharedser.logout();
    this._router.navigateByUrl('/');
    }

  }

}
