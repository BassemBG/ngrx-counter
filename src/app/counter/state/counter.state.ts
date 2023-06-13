export interface CounterState {
    counter: number,
    text: String
}


export const initialState : CounterState = {
    counter: 0,
    text: 'Hello world'
}