import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from './reducer/cartReducer'
import thunk from 'redux-thunk'
import cartConfirmationModalSlice from '../(main)/[id_product]/reducer/cartConfirmationModalReducer'

const cartPersistedReducer = persistReducer({
    key: 'cart',
    storage
}, cartReducer)

export const store = configureStore({
    reducer: {
        _id_product_cartConfirmationModal: cartConfirmationModalSlice,
        cart: cartPersistedReducer,
    },
    middleware: [thunk]
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch