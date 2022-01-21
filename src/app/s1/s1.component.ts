import { Component, OnInit } from '@angular/core';
import { DemoservService } from '../demoserv.service';

@Component({
  selector: 'app-s1',
  templateUrl: './s1.component.html',
  styleUrls: ['./s1.component.css']
})
export class S1Component implements OnInit {

  constructor(private dblogin:DemoservService) { }

  ngOnInit(): void {
  }

  s1value='';

  xyz(s1:any){
    this.s1value=s1;
    this.dblogin.db(this.s1value);
  }

}
