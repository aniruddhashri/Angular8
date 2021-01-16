import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../../Services/shared-service.service'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 testdata:String[] =[]
  constructor(private sharedser: SharedServiceService) { }

  ngOnInit() {
  }
 testapi()
{
  this.sharedser.testApi2Api().subscribe(
    data=>{
          this.testdata = data.data1
    })
}
}
