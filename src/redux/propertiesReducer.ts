import { FETCH_APARTMENTS_ERROR, FETCH_APARTMENTS_LOADING, FETCH_APARTMENTS_SUCCESS } from "./actions/types";

const initialState = {
  loading: false,
  all: [],
  error: {}
}

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APARTMENTS_LOADING: return {
      ...state,
      loading: true
    };
    case FETCH_APARTMENTS_SUCCESS: return {
      ...state,
      loading: false,
      all: action.payload,
      error: {}
    };    
    case FETCH_APARTMENTS_ERROR: return {
      ...state,
      loading: false,
      error: action.payload
    };
    default: return state
  }
}

export default propertiesReducer