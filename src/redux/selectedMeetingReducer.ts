import { SELECT_MEETING } from "./actions/types";

const initialState = {
  id: '',
  data: {
    dateCreated: Date.now(),
    open: true,
    quorum: []
  }
}

const SelectedMeetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MEETING: return action.payload;
    default: return state
  }
}

export default SelectedMeetingReducer