import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  name:any="";
  upiid:any="";
  number:any="";
  accNumber:any="";
  iBalance:any="";
  aBalance:any="";

  savedata(){
    localStorage.setItem("Name",this.name);
    localStorage.setItem("myUpiid",this.upiid)
    localStorage.setItem('myNumber',this.number)
    localStorage.setItem("myaccNumber",this.accNumber);
    localStorage.setItem("myiBalance",this.iBalance);
    localStorage.setItem("myaBalance",this.aBalance);
    this.route.navigate(['/']);
  }



}
