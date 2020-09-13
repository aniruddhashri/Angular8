import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  