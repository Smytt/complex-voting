import { applyMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { Store } from "../types";
import thunk from 'redux-thunk';
import propertiesReducer from "./propertiesReducer";
import meetingsReducer from "./meetingsReducer";

const rootReducer = combineReducers({
  properties: propertiesReducer,
  meetings: meetingsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;