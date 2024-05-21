import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter-slice.js'
import authReducer from './auth-slice.js'


const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

export default store;