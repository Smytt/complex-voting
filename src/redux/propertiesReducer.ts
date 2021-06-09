import { FETCH_PROPERTIES_ERROR, FETCH_PROPERTIES_LOADING, FETCH_PROPERTIES_SUCCESS } from "./actions/types";

const initialState = {
  loading: false,
  all: [],
  error: {}
}

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES_LOADING: return {
      ...state,
      loading: true
    };
    case FETCH_PROPERTIES_SUCCESS: return {
      ...state,
      loading: false,
      all: action.payload,
      error: {}
    };    
    case FETCH_PROPERTIES_ERROR: return {
      ...state,
      loading: false,
      error: action.payload
    };
    default: return state
  }
}

export default propertiesReducer