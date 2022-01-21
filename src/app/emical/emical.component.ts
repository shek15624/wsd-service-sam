import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emical',
  templateUrl: './emical.component.html',
  styleUrls: ['./emical.component.css']
})
export class EmicalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  price:any=""
  month:any=""
  rate:any=""
  total:any=""
  emi:any=""
  interest:any=""

  calculate(){
    // this.interest = (this.price * (this.rate * 0.01))/this.month;
    // this.total = ((this.price/this.month) + this.interest);
     this.interest = (this.price * (this.rate * 0.01)) / this.month;
     this.total = ((this.price / this.month) + this.interest).toFixed(2);
  }

  clearValue(){
    this.price='';
    this.month='';
    this.rate='';
    this.total='';
    this.interest='';
  }

}
