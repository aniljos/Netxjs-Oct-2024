import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";



//store
export const store = configureStore({
    reducer: authReducer
})