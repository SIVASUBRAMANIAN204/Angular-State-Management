import { Component, Input } from '@angular/core';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-value',
  standalone: true,
  imports: [],
  templateUrl: './counter-value.component.html',
  styleUrl: './counter-value.component.scss'
})
export class CounterValueComponent {
 count : number = 0;

 constructor(private store: Store <{count: CounterState}>) {
  
 }

 ngOnInit(){
  this.store.select('count').subscribe((data:any)=>{
    this.count = data.count
  })
 }
}
