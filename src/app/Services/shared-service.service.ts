import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {regschema} from '../Components/registration/regschema'
import {respfromDB} from '../Components/registration/resp'
import {loginschema} from '../Components/login/loginschema'
import {LoginrespfrmDB} from '../Components/login/loginrespfrmDB'
import {menuschema} from  '../Components/admin/Schemas/menuschema'
import {HeaderComponent} from '../Components/header/header.component'

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  userdata:any
  menusch:menuschema
  userloggedon:boolean = false
  constructor(private _http:HttpClient) { }

  public register(data:regschema):Observable<any>{
  const headers1= new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  headers1.append('Access-Control-Allow-Headers', 'Content-Type');
    
   const resp = this._http.post("/api/listing/register",data,{headers:headers1}).pipe(
      map((responsefrmDB:respfromDB)=>{
        return responsefrmDB
      })
    )
    return resp
  }

public testApi2Api():Observable<any>{
  
//const apiresp = 
return this._http.get("/api/listing/check").pipe(
      map((apiresponse)=>{
      return apiresponse
    })
    )
  //  return apiresp
}

  public login(logindetails : loginschema) : Observable<any>{
    const loginresp = this._http.post("/api/listing/login", logindetails).pipe(
      map((loginrespfrmDB:LoginrespfrmDB)=>{
        if(loginrespfrmDB.status == "200")
        {
        this.userloggedon = true;
        }

        this.userdata = loginrespfrmDB;

      return loginrespfrmDB
    })
    )
    return loginresp
  }

  public addmenu(menusch:menuschema[]):Observable<any>{
    const menures1 = this._http.post("/api/listing/addmenu",menusch).pipe(
      map((menuresp)=>{
        return menuresp;
      })
    )
    return menures1
  }

  public fetchmenu():Observable<any>{
    const menures1 = this._http.get("/api/listing/fetchmenu",).pipe(
      map((menulistresp)=>{
        return menulistresp;
      })
    )
    return menures1
  }

  public deletemenu(dishname):Observable<any>{
    const menures1 = this._http.post("/api/listing/deletemenu",dishname).pipe(
      map((menulistresp)=>{
        return menulistresp;
      })
    )
    return menures1
  }

  public logout(): void{ 
    this.userloggedon = false
 }
}

