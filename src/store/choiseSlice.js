import { createSlice } from '@reduxjs/toolkit'

const choiseSlice = createSlice({
    name: 'choiseCurrency',
    initialState: {
        selectedFrom: {},
        selectedTo: {},
        selectedToVal: null,
        resultValue: 0,
        search: ''
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
        },
        setSearch(state, action) {
            state.search = action.payload
        }

    }
})

export const { selectedFromCurrency, selectedToCurrency, setResultValue, setSearch } = choiseSlice.actions
export default choiseSlice.reducer