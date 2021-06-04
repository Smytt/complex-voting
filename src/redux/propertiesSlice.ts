import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import firebase from "firebase";

const propertiesAdapter = createEntityAdapter();

export const fetchProperties = createAsyncThunk('properties/fetchApartments', async () => {
  const properties = firebase.firestore().collection('properties')
  console.log(properties)
  return {};
})

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: propertiesAdapter.getInitialState({
    properties: [],
    loading: false
  }),
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false;
        
      })
  }
})