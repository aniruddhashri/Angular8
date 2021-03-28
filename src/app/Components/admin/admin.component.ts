import { Component, OnInit } from '@angular/core';
import { LoginrespfrmDB} from '../login/loginrespfrmDB';
import {SharedServiceService} from '../../Services/shared-service.service'
import { Router } from '@angular/router';
import {Menulistschema} from './Schemas/menulistschema'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {


  username:String;
  address:String;
  mblno:String;
  email:String;
  userdata1:LoginrespfrmDB

  dishname:String
  price:number;
  dishtype:String ="";
  dishimage:File

  menudatareq:any
  menudataresp:any[]=[]
  menuoninit:any[]=[]
  responseMessage: any;

  menulistschema:Menulistschema

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  
  constructor(private _router:Router,private sharedser: SharedServiceService) { 
  }

  ngOnInit() {
    try{
      this.username = this.sharedser.userdata.Data.username
      const menuresp = this.sharedser.fetchmenu().subscribe(
        (resp)=>{
         this.menudataresp = resp.dish
       })
       }
       catch(ex){
        const menuresp = this.sharedser.fetchmenu().subscribe(
        (resp)=>{
         this.menudataresp = resp.dish
       })
       }
  }

  deleterow(i)
  {
    var delBtn = confirm("Do you want to delete ?");
    if ( delBtn == true ) {
    this.sharedser.deletemenu({dishname:this.menudataresp[i].dishname}).subscribe(
        menuresp =>{
          this.responseMessage = menuresp.msg;
          this.menudatareq = ""
          if(menuresp.status == 200)
          this.menudataresp.splice(i, 1 );
          this.responseMessage = ""
        })}  
  }

  AddMenu()
  {
    this.menudatareq = ({dishname:this.dishname,price: this.price,dishimg:this.cardImageBase64,dishtype:this.dishtype})

    this.sharedser.addmenu(this.menudatareq).subscribe(
      menuresp =>{
        this.responseMessage = menuresp.msg;
        this.menudatareq = ""
        if(menuresp.status == 200)
        {
        this.menudataresp.push({dishname:this.dishname,price: this.price,dishimg:this.cardImageBase64,dishtype:this.dishtype});
        this.dishname = ""
        this.price = null
        this.dishtype= ""
        this.dishimage = null
        this.cardImageBase64 = null;
        this.isImageSaved = false;
      }
        }
    )
  }

fileChangeEvent(fileInput: any) {
        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
          //  const max_size_byte = 2097152;
            const allowed_types = ['image/png', 'image/jpeg'];
           // const max_height = 15200;
            //const max_width = 25600;

            // if(fileInput.target.files[0].type == allowed_types[0] || fileInput.target.files[0].type == allowed_types[1])
            // {
            //   if (fileInput.target.files[0].size > max_size_byte) 
            //   {
            //       alert('Maximum size allowed is ' + max_size_byte/1048576 + 'Mb');
            //       this.dishname = ""
            //       this.price = null
            //       this.dishimage = null
            //       this.cardImageBase64 = null;
            //       this.isImageSaved = false;
            //       return false;
            //   }
            // }
            //   else
            //   {
            //     alert('Only Image type PNG and JPEG is allowed for Uploading')
            //     this.dishname = ""
            //     this.price = null
            //     this.dishimage = null
            //     this.cardImageBase64 = null;
            //     this.isImageSaved = false;
            //         return false;
            //   }

            const reader = new FileReader();
            reader.onload = (e: any) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                  
                        const imgBase64Path = e.target.result;
                        this.cardImageBase64 = imgBase64Path;
                        this.isImageSaved = true;
                };
            };

            reader.readAsDataURL(fileInput.target.files[0]);
            
        }
    }

}
