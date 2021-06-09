import firebase from "firebase"
import { FETCH_MEETING_ERROR, FETCH_MEETING_LOADING, FETCH_MEETING_SUCCESS } from "./types"

export const fetchMeeting = (id, unsub) => async dispatch => {
  dispatch({
    type: FETCH_MEETING_LOADING
  })

  try {
    const unsubscribe = firebase.firestore().collection('meetings').doc(id)
      .onSnapshot(doc => {
        dispatch({
          type: FETCH_MEETING_SUCCESS,
          payload: doc.data()
        })
      })
    unsub(unsubscribe);

  } catch (e) {
    dispatch({
      type: FETCH_MEETING_ERROR,
      payload: e
    })
  }

}