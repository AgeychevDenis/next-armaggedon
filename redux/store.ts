import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";

const rootReducer = combineReducers({ product: productSlice });

export const store = configureStore({ reducer: rootReducer });