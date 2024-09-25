import { createSlice } from "@reduxjs/toolkit";

export const  convocatorySlice = createSlice({
    name: "convocatory",
    initialState: [],
    reducers: {
        addConvocatory: (state, action) =>{
            state.push(...action.payload);
        }
    }
})


export const {addConvocatory} = convocatorySlice.actions;

export default convocatorySlice.reducer;