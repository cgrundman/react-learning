import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice.js";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer
    }
})

export default store