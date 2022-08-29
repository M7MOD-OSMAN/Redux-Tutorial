import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    // ACTIONS
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    increment5: (state) => {
      state.count += 5
    },
  },
})

export const { increment, decrement, increment5 } = counterSlice.actions
export default counterSlice.reducer
