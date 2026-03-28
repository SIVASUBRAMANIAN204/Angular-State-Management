import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.scss'
})
export class CounterButtonComponent {

  constructor(private store: Store<{count: CounterState}>) { }
 
  increment(){
    this.store.dispatch(increment())
  }

  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }
}
