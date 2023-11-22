import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartReducerState{
    id: Array<String>
}

const initialState: CartReducerState = {
    id: []
}

export const cartReducerSlice = createSlice({
    name: 'cart-reducer',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<String>) => {
            const temp = state.id
            temp.push(action.payload)
            state.id = temp
        }
    }
})

export const { addProduct } = cartReducerSlice.actions
export default cartReducerSlice.reducer