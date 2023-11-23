import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

// reducer
import cartReducer from './reducer/cartReducer'
import modalReducer from './reducer/modalReducer'

const cartPersistedReducer = persistReducer({
    key: 'cart',
    storage
}, cartReducer)

export const store = configureStore({
    reducer: {
        cart: cartPersistedReducer,
        modal: modalReducer
    },
    middleware: [thunk]
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch