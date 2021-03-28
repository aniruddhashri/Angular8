import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiurlService {

  public apiUrl = 'testtt';

  // Whether or not to enable debug mode
  public enableDebug = true;

  constructor() { }
}
