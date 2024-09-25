import { configureStore } from "@reduxjs/toolkit";
import convocatoriasReducer from "./convocatoriasSlice"
import userReducer from "./userSlice"

const store = configureStore({
    reducer:{
        convocatorias: convocatoriasReducer,
        user: userReducer
    }
})

export default store;