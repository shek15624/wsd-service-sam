import { Component, OnInit } from '@angular/core';
import { DemoservService } from '../demoserv.service';

@Component({
  selector: 'app-s2',
  templateUrl: './s2.component.html',
  styleUrls: ['./s2.component.css']
})
export class S2Component implements OnInit {

  constructor(private dblogin:DemoservService) { }

  ngOnInit(): void {
  }
  servevalue='';
  xyz(){
    this.servevalue = this.dblogin.s1value;
  }

}
