import { FETCH_MEETING_ERROR, FETCH_MEETING_LOADING, FETCH_MEETING_SUCCESS } from "./actions/types";

const initialState = {
  loading: true,
  data: {},
  error: {}
}

const meetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEETING_LOADING: return {
      ...state,
      loading: true
    };
    case FETCH_MEETING_SUCCESS: return {
      ...state,
      loading: false,
      data: action.payload,
      error: {}
    };
    case FETCH_MEETING_ERROR: return {
      ...state,
      loading: false,
      error: action.payload
    };
    default: return state
  }
}

export default meetingReducer