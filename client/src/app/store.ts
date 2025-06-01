import { configureStore, type Store } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'

const store: Store = configureStore({
  reducer: {
    auth: authSlice
  },
  middleware: (pMid) => pMid(),
  devTools: true
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch