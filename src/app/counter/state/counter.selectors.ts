import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCounterState = createFeatureSelector<CounterState>('counter') //this is the name i put in app.modules

export const getCounter = createSelector(getCounterState, (state) => {
    return state.counter
})


export const getText = createSelector(getCounterState, (state) => {
    return state.text
})

//responsible for sending only particular part of the data