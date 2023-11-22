import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartConfirmationModalElement extends HTMLElement {
  showModal: () => void;
  close: () => void;
}

interface CartConfirmationModalState {
    ref: string | null,
}

const initialState: CartConfirmationModalState = {
    ref: null, 
};

export const cartConfirmationModalSlice = createSlice({
  name: 'cart-confirmation-modal-slice',
  initialState,
  reducers: {
    setModalRef: (state, action: PayloadAction<string | null>) => {
        state.ref = action.payload
    },

    showModal: state => {
        if(state.ref){
            const modalElement: CartConfirmationModalElement = document.querySelector(state.ref) as CartConfirmationModalElement
            modalElement.showModal()
        }
    },

    closeModal: state => {
        if(state.ref){
            const modalElement: CartConfirmationModalElement = document.querySelector(state.ref) as CartConfirmationModalElement
            modalElement.close()
        }
    }
  },
});

export const { setModalRef, showModal, closeModal } = cartConfirmationModalSlice.actions;
export default cartConfirmationModalSlice.reducer;
