import firebase from "firebase"
import { allProperties } from "../../data/ideal-areas"
import { FETCH_APARTMENTS_LOADING, FETCH_APARTMENTS_SUCCESS } from "./types"

export const fetchApartments = () => async dispatch => {

  dispatch({
    type: FETCH_APARTMENTS_LOADING
  })
  
  const snapshot = await firebase.firestore().collection('properties').get()
  const allProperties = snapshot.docs.map(doc => doc.data())
  
  dispatch({
    type: FETCH_APARTMENTS_SUCCESS,
    payload: allProperties
  })
}