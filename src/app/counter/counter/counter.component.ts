import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  //no need to initialise the counter variable here 
  //cuz it's available now in the store
  //accessible from every component
}
