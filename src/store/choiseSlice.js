import { createSlice } from '@reduxjs/toolkit'

const choiseSlice = createSlice({
    name: 'choiseCurrency',
    initialState: {
        selectedFrom: {},
        selectedTo: {}
    },
    reducers: {
        selectedFromCurrency(state, action) {
            state.selectedFrom = action.payload
        },
        selectedToCurrency(state, action) {
            state.selectedTo = action.payload
        }
    }
})

export const { selectedFromCurrency,selectedToCurrency } = choiseSlice.actions
export default choiseSlice.reducer