import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialogalert',
  templateUrl: './dialogalert.component.html',
  styleUrls: ['./dialogalert.component.css']
})
export class DialogalertComponent implements OnInit {

constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef: MatDialogRef<DialogalertComponent>) { 
  dialogRef.disableClose = true;
}

email:String

ngOnInit() {
  this.email = this.data.email
}

  test(){
    alert("alert on dialog worked !!!")
  }

}
