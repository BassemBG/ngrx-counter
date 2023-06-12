import { Component } from '@angular/core';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent {
  value: number;

  constructor(private store: Store<{counter : CounterState }>){}

  onAdd(){
    this.store.dispatch(customIncrement({value: +this.value}));  //convert value from String to Int with "+"
  }
}
