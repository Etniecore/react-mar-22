import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {countReducer} from "./slices";


const mainReducer = combineReducers({ // combining all reducers in one
    countReducer
})

const createStore = () => configureStore({reducer:mainReducer}); // configurator with main reducer for your global store

export {createStore};
