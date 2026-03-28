import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement, toggleCustomInput } from '../state/counter.action';
import { CommonModule, NgIf } from "../../../../node_modules/@angular/common/index";
@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [
    FormsModule
],   
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent {

  customValue:number = 0
  showCustomInput : boolean = false
  constructor(private store:Store<{count: CounterState}>){

  }
  ngOnInit(){
    this.store.select('count').subscribe((data:any)=>{
      console.log(data);
      this.showCustomInput = data.toggle
    })
  }
  onToggleClicked(){
      this.store.dispatch(toggleCustomInput())
  }
  onButtonClicked(){
    this.store.dispatch(customIncrement({value : +this.customValue}))
  }
}
