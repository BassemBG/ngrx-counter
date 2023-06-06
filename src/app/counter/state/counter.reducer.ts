import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { decrement, increment, reset } from "./counter.actions";

const _counterReducer = createReducer(
    initialState,  //get initial state from the store

    //works when increment action is triggered
    on(increment, (state) => {  //state will take the value of initialState
        return {
            ...state,  //first, return the state cuz immutable
            counter: state.counter++  //then change the properties
        }
    }), 
    //works when decrement action is triggered
    on(decrement, (state) => {  //state will take the value of initialState
        return {
            ...state,  //first, return the state cuz immutable
            counter: state.counter--  //then change the properties
        }
    }),
    //works when reset action is triggered
    on(reset, (state) => {
        return {
            ...state,
            counter: state.counter = 0
        }        
    })
);

export function counterReducer(state, action){
    return _counterReducer(state, action); 
}

//import store in app.module