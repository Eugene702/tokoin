import { configureStore } from '@reduxjs/toolkit'
import cartConfirmationModalReducer from './reducer/cartConfirmationModalReducer'

export const store = configureStore({
  reducer: {
    posts: cartConfirmationModalReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch