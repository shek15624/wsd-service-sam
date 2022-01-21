import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit, OnDestroy, DoCheck{

  constructor() {
    console.log("constructor")
   }
  ngDoCheck(): void {
    console.log('Mmessages do check');
  }
  ngOnDestroy(): void {
    console.log('ng connection destroy.');
  }
  ngOnInit(): void {
    console.log('ng connection oninit');
  }
}
