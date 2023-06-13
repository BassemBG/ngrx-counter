import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{
  counter$: Observable<number>;
  constructor(private store: Store<{counter : CounterState }>){} //inject the store . That is the structure of the store data

  ngOnInit(): void{
    this.counter$ = this.store.select(getCounter); //put data directly in observable instead of subscribing with old method and use selector to only get specific data (counter in this case)
  
  }

}
