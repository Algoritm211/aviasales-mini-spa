import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const filterReducer = createSlice({
  name: 'filterReducer',
  initialState: {
    // -1 if no matter how many transfers
    numberOfTransfers: 0
  },
  reducers: {
    setNumberOfTransfers: (state, action: PayloadAction<{ numberOfTransfers: number }>) => {
      state.numberOfTransfers = action.payload.numberOfTransfers
    }
  }
})

export const {setNumberOfTransfers} = filterReducer.actions
export default filterReducer.reducer
