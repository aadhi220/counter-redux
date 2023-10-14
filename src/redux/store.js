import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



export const store = configureStore({
    reducer: {
//reduser should key-value pair
counter:counterSlice

    }
})