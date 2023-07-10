import { createSlice } from '@reduxjs/toolkit'

const choiseSlice = createSlice({
    name: 'choiseCurrency',
    initialState: {
        selectedFrom: {},
        selectedTo: {},
        selectedToVal: null,
        resultValue: 0
    },
    reducers: {
        selectedFromCurrency(state, action) {
            state.selectedFrom = action.payload
            state.selectedFromVal = action.payload.rate
        },
        selectedToCurrency(state, action) {
            state.selectedTo = action.payload
            state.selectedToVal = action.payload.rate
        },
        setResultValue(state, action) {
            state.resultValue = Number(action.payload.toFixed(2))
        }

    }
})

export const { selectedFromCurrency, selectedToCurrency, setResultValue } = choiseSlice.actions
export default choiseSlice.reducer