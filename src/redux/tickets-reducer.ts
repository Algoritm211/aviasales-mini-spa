import {$CombinedState, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ITicket} from "../types/types";
import {AppDispatch, RootState} from "./store";
import {TicketAPI} from "../api/ticket-api";

type ThunkAPIType = {
  dispatch: AppDispatch
  state: RootState
}

export const loadAllTickets = createAsyncThunk<
  { tickets: Array<ITicket>, stop: boolean }
  , 'load', ThunkAPIType>(
  'ticketsReducer/loadAllTickets',
  async (arg: 'load', thunkAPI) => {
    thunkAPI.dispatch(setLoading(true))
    const searchId = thunkAPI.getState().appReducer.searchId
    const ticketsData = await TicketAPI.getTickets(searchId)
    thunkAPI.dispatch(setLoading(false))
    return ticketsData
  }
)


const ticketsReducer = createSlice({
  name: 'ticketsReducer',
  initialState: {
    tickets: [] as Array<ITicket>,
    stop: false,
    isLoading: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(loadAllTickets.fulfilled, (state, action) => {
      state.tickets = action.payload.tickets
      state.stop = action.payload.stop
    })
  }
})


export const {setLoading} = ticketsReducer.actions
export default ticketsReducer.reducer
