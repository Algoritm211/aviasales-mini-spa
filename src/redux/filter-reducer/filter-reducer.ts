import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const filterReducer = createSlice({
  name: 'filterReducer',
  initialState: {
    // -1 if no matter how many transfers
    numberOfTransfers: [] as Array<number>
  },
  reducers: {
    setNumberTransfers: (state, action: PayloadAction<{ numberOfTransfers: number[] }>) => {
      state.numberOfTransfers = action.payload.numberOfTransfers
    }
  }
})

export const {setNumberTransfers} = filterReducer.actions
export default filterReducer.reducer
