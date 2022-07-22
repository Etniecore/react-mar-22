import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count:0
}

const countSlice = createSlice({

    name: 'CountSlice',

    initialState,

    reducers:{
        inc: (state,action)=>{
            ++state.count} ,
        dec: (state, action)=>{
            --state.count},
        reset: (state, action)=>{
            state.count = 0}
    }
})

const {reducer:countReducer,actions:{inc,dec,reset}}= countSlice;

const countActions = {
    inc,
    dec,
    reset
}

export {countReducer,countActions};