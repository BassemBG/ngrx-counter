import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter : number = 0;

  onIncrement(){
    this.counter++;
  }

  onDecrement(){
    this.counter--;
  }

  onReset(){
    this.counter = 0;
  }


}
