import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    name: '',
    email: '',
  },
  reducers: {
    // ACTIONS
    addUser: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
    },
  },
})

export const { addUser } = userSlice.actions
export default userSlice.reducer
