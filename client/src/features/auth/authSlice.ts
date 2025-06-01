import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AuthSliceType, UserType } from '../../types/types'

const initialState: AuthSliceType = {
  status: false,
  userInfo: null
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      state.status = true
      state.userInfo = action.payload
    },
    logout: (state) => {
      state.status = false,
      state.userInfo = null
    }
  }
})

export default authSlice.reducer
export const { login } = authSlice.actions
