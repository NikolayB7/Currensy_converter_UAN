import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false
}

export const stateModal = createSlice({
    name: 'selectedCurrency',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setModal } = stateModal.actions
export default stateModal.reducer