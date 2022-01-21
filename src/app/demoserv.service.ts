import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoservService {

  constructor() { }

  s1value='';
  db(s1value:any){
    this.s1value=s1value;
  }
}
