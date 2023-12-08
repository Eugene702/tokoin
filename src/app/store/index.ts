import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

// reducer
import cartReducer from './reducer/cartReducer'
import modalReducer from './reducer/modalReducer'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    },
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch