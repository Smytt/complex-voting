import { applyMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createStore } from "redux";
import thunk from 'redux-thunk';
import propertiesReducer from "./propertiesReducer";
import meetingsReducer from "./meetingsReducer";
import meetingReducer from "./meetingReducer";

const rootReducer = combineReducers({
  properties: propertiesReducer,
  meetings: meetingsReducer,
  meeting: meetingReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;