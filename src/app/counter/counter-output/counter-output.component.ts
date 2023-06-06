import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
  counter: number;
  constructor(private store: Store<{counter : { counter : number } }>){} //inject the store . That is the structure of the store data

  ngOnInit(): void{
    this.store.select('counter').subscribe(
      data => {
        this.counter = data.counter  //we got the data.counter because we have counter : number in the injection
      }
    )  //select returns an observable -> subscribe
  }

}
