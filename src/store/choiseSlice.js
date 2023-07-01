import { createSlice } from '@reduxjs/toolkit'

const choiseSlice = createSlice({
    name: 'choiseCurrency',
    initialState: {
        selectedFrom: {}
    },
    reducers: {
        selectedFromCurrency(state, action) {
            state.selectedFrom = action.payload
        }
    }
})

export const { selectedFromCurrency } = choiseSlice.actions
export default choiseSlice.reducer