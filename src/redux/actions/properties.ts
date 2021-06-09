import firebase from "firebase"
import { allProperties } from "../../data/ideal-areas"
import { FETCH_PROPERTIES_LOADING, FETCH_PROPERTIES_SUCCESS } from "./types"

export const fetchProperties = () => async dispatch => {

  dispatch({
    type: FETCH_PROPERTIES_LOADING
  })
  
  // const snapshot = await firebase.firestore().collection('properties').get()
  // const allProperties = snapshot.docs.map(doc => doc.data())

  dispatch({
    type: FETCH_PROPERTIES_SUCCESS,
    payload: allProperties()
  })
}