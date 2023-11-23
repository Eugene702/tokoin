import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalElement extends HTMLElement {
  showModal: () => void;
  close: () => void;
}

export const cartConfirmationModalSlice = createSlice({
  name: 'modal-reducer',
  initialState: {},
  reducers: {
    showModal: (state, action: PayloadAction<string>) => {
        const modalElement: ModalElement = document.querySelector(action.payload) as ModalElement
        modalElement.showModal()
    },

    closeModal: (state, action: PayloadAction<string>) => {
        const modalElement: ModalElement = document.querySelector(action.payload) as ModalElement
        modalElement.close()
    }
  },
});

export const { showModal, closeModal } = cartConfirmationModalSlice.actions;
export default cartConfirmationModalSlice.reducer;
