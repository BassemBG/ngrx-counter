import { Component, OnInit } from '@angular/core';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { changeText, customIncrement } from '../state/counter.actions';
import { getText } from '../state/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit{
  value: number;
  text$: Observable<String>;
  modifiedText : String = "Modified Hello world";
  constructor(private store: Store<{counter : CounterState }>){}

  ngOnInit(): void {
    this.text$ = this.store.select(getText); //use selector to only get specific data (text in this case)
  }

  onAdd(){
    this.store.dispatch(customIncrement({value: +this.value}));  //convert value from String to Int with "+"
  }

  onChangeText(){
    this.store.dispatch(changeText({text : this.modifiedText}));
  }

}
