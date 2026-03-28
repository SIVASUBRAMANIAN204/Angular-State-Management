import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { customIncrement, decrement, increment, reset, toggleCustomInput } from "./counter.action";
import { state } from "@angular/animations";


export const counterReducer = createReducer(
    initialState,
    on(increment , (state)=>{
        return {
            ...state,
            count : state.count + 1
        }
    }),
    on(decrement , (state)=>{
        return {
            ...state,
            count : state.count - 1
        }
    }),
    on(reset , (state)=>{
        return {
            ...state,
            count : 0
        }
    }),
    on(customIncrement, (state,action) => {
        console.log(action);
        return {
            ...state,
            count : state.count + action.value 
        }
    }),
    on(toggleCustomInput,(state)=>{
        return {
            ...state,
            toggle : !state.toggle
        }
    })
)