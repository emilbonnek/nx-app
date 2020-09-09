import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  val = 0;
  constructor() { }

  increase() {
    this.val += 1;
  }
  
  decrease() {
    this.val -= 1;
  }

  ngOnInit(): void {
  }

}
