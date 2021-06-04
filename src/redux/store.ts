import { applyMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { Store } from "../types";
import thunk from 'redux-thunk';
import propertiesReducer from "./propertiesReducer";

const rootReducer = combineReducers({
  properties: propertiesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;