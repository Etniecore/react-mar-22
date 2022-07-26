import {configureStore,combineReducers } from "@reduxjs/toolkit";
import {carReducer} from "./carSlice/carSlice";
import {authReducer} from "./authSlice/authSlice";

const mainReducer = combineReducers({carReducer:carReducer, authReducer:authReducer});

const setupStore = () => configureStore({reducer:mainReducer});

export {setupStore};