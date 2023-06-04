import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {

  @Output() increment= new EventEmitter<void>();
  @Output() decrement= new EventEmitter<void>();
  @Output() reset= new EventEmitter<void>();

  onIncrement(){
    this.increment.emit();
  }

  onDecrement(){
    this.decrement.emit();
  }

  onReset(){
    this.reset.emit();
  }

}
