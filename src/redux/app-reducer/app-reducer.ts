import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TicketAPI} from "../../api/ticket-api";


export const getSearchId = createAsyncThunk(
  'appReducer/getSearchId',
  async () => {
    const searchId = await TicketAPI.getSearchId()
    return searchId
  }
)

const appReducer = createSlice({
  name: 'appReducer',
  initialState: {
    searchId: null as unknown as string,
    isReady: false,
    isError: false
  },
  reducers:{
    setError: (state, action:PayloadAction<boolean>) => {
      state.isError = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getSearchId.fulfilled, (state, action) => {
      state.searchId = action.payload.searchId
      state.isReady = true
    })
  }
})

export const {setError} = appReducer.actions

export default appReducer.reducer
