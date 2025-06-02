import { configureStore, type Store } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import apiSlice from '../features/api/apiSlice'

const store: Store = configureStore({
  reducer: {
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (pMid) => pMid().concat(apiSlice.middleware),
  devTools: true
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch