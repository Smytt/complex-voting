import firebase from "firebase"
import { APPEND_MEETING, FETCH_MEETINGS_ERROR, FETCH_MEETINGS_LOADING, FETCH_MEETINGS_SUCCESS } from "./types"

export const fetchMeetings = () => async dispatch => {

  dispatch({
    type: FETCH_MEETINGS_LOADING
  })

  try {
    const collection = await firebase.firestore().collection('meetings').get()
    const docs = collection.docs.map(doc => ({ id: doc.id, data: doc.data() }));
    dispatch({
      type: FETCH_MEETINGS_SUCCESS,
      payload: docs
    })

  } catch (e) {
    dispatch({
      type: FETCH_MEETINGS_ERROR,
      payload: e
    })
  }
}