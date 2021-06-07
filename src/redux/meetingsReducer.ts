import { FETCH_MEETINGS_ERROR, FETCH_MEETINGS_LOADING, FETCH_MEETINGS_SUCCESS } from "./actions/types";

const initialState = {
  loading: false,
  all: [],
  error: {}
}

const meetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEETINGS_LOADING: return {
      ...state,
      loading: true
    };
    case FETCH_MEETINGS_SUCCESS: return {
      ...state,
      loading: false,
      all: action.payload,
      error: {}
    };    
    case FETCH_MEETINGS_ERROR: return {
      ...state,
      loading: false,
      error: action.payload
    };
    default: return state
  }
}

export default meetingsReducer