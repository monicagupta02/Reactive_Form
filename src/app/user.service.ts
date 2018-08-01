import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class UserService {

  constructor() { }
  data;
  
  check(str)
  {
    console.log("in service", str)
    this.data = str
  }
  getData(){
    return this.data
  }
}
