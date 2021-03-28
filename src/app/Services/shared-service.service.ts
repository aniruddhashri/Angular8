import { Injectable,OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {BehaviorSubject, Observable} from 'rxjs'
import {map,catchError} from 'rxjs/operators'
import {regschema} from '../Components/registration/regschema'
import {respfromDB} from '../Components/registration/resp'
import {loginschema} from '../Components/login/loginschema'
import {LoginrespfrmDB} from '../Components/login/loginrespfrmDB'
import {menuschema} from  '../Components/admin/Schemas/menuschema'
import {DialogalertComponent} from '../Components/dialogalert/dialogalert.component'
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

declare const Test:any;

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService implements OnInit{ 
  userdata:any
  menusch:menuschema
  userloggedon:boolean = false
  public cartdata:any[]=[]
  public jsonData:any[]=[]
  
  private newUser = new BehaviorSubject<any>({
    dishname: '',
    price: ''
  });

  public sharedConfig: Object = null;


  constructor(private _http:HttpClient,public dialog: MatDialog,public route:Router) { }

  ngOnInit(){
      this._http.get("../env.json").toPromise().then((response : any) => {
      this.jsonData.push(response)
      })

      this.cartdata = [];
  }
  
  public register(data:regschema):Observable<any>{

  const headers1= new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    headers1.append('Access-Control-Request-Method', 'POST');
  //headers1.append('Access-Control-Allow-Headers', 'Content-Type,Authorization');

    
   const resp = this._http.post<respfromDB>(this.jsonData[0].PRODURL + this.jsonData[0].registerAPI,data,{headers:headers1}).pipe(
      map((responsefrmDB)=>{
        return responsefrmDB
      })
    )
    return resp
  }

public testApi2Api():Observable<any>{

const headers1= new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    headers1.append('Access-Control-Request-Method', 'GET');
  
return this._http.get(this.jsonData[0].PRODURL + "/check",{headers:headers1}).pipe(
      map((apiresponse)=>{
      return apiresponse
    })
    )
}

  public login(logindetails : loginschema) : Observable<any>{

const headers1= new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    headers1.append('Access-Control-Request-Method', 'POST');

    const loginresp = this._http.post<LoginrespfrmDB>(this.jsonData[0].PRODURL + this.jsonData[0].loginAPI, logindetails,{headers:headers1}).pipe(
      map((loginrespfrmDB)=>{
        if(loginrespfrmDB.status == "200")
        {
        this.userloggedon = true;
        }

        this.userdata = loginrespfrmDB;

      return loginrespfrmDB
    }),
    catchError((error, caught) => {
      this.dialog.open(DialogalertComponent, {
        width: '650px',
        height: '160px',
        data: {Message: error.statusText,errorstatus:true},
        panelClass: 'custom-modalbox'}
        );
        
      return Observable.throw(error);
    })
    )
    return loginresp
  }

  public addmenu(menusch:menuschema[]):Observable<any>{


const headers1= new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    headers1.append('Access-Control-Request-Method', 'POST');
    const menures1 = this._http.post(this.jsonData[0].PRODURL + this.jsonData[0].addmenuAPI,menusch,{headers:headers1}).pipe(
      map((menuresp)=>{
        return menuresp;
      })
    )
    return menures1
  }

  public fetchmenu():Observable<any>{

    // this._http.get("../env.json").toPromise().then((response : any) => {
    //   this.jsonData.push(response)
    // })

const headers1= new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    headers1.append('Access-Control-Request-Method', 'GET');

    //const menures1 = this._http.get("http://localhost:2000/api/listing/fetchmenu",{headers:headers1}).pipe(
    const menures1 = this._http.get(this.jsonData[0].PRODURL + this.jsonData[0].fetchmenuAPI).pipe(
      map((menulistresp)=>{
        return menulistresp;
      })
    )
    return menures1
  }

  public deletemenu(dishname):Observable<any>{

const headers1= new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    headers1.append('Access-Control-Request-Method', 'POST');

    const menures1 = this._http.post(this.jsonData[0].PRODURL + this.jsonData[0].deletemenuAPI,dishname,{headers:headers1}).pipe(
      map((menulistresp)=>{
        return menulistresp;
      })
    )
    return menures1
  }

  public logout(): void{ 
    this.userloggedon = false
 }

 public setFilterdInfo(user:any){
  this.newUser.next(user);
 }

 public getFilteredInfo() {
  return this.newUser.asObservable();
}

// public getdishtype(dishtype):Observable<any>{
//   const headers1= new HttpHeaders().set('Access-Control-Allow-Origin', '*');
//     headers1.append('Access-Control-Request-Method', 'POST');

//     const dishresp = this._http.post(this.jsonData[0].PRODURL + "/getdishtype",dishtype,{headers:headers1}).pipe(
//       map((menulistresp)=>{
//         return menulistresp;
//       })
//     )
//     return dishresp
// }
}

