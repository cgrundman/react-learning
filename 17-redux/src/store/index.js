import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.value;
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;