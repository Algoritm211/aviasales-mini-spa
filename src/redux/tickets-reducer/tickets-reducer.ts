import {$CombinedState, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ITicket} from "../../types/types";
import {AppDispatch, RootState} from "../store";
import {GetTicketsType, TicketAPI} from "../../api/ticket-api";
import { setError } from "../app-reducer/app-reducer";

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
    let ticketsData = {tickets: [], stop: false} as GetTicketsType;
    try {
      ticketsData = await TicketAPI.getTickets(searchId)
      thunkAPI.dispatch(setLoading(false))
    } catch (error) {
      console.log(error)
      thunkAPI.dispatch(setError(true))
    }
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
