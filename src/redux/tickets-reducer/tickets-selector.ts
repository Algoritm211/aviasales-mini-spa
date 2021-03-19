import {RootState} from "../store";


export const getTicketsLoading = (state: RootState) => {
  return state.ticketsReducer.isLoading
}

export const getTickets = (state: RootState) => {
  return state.ticketsReducer.tickets
}
