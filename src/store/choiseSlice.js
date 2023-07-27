import { createSlice } from '@reduxjs/toolkit'

const choiseSlice = createSlice({
    name: 'choiseCurrency',
    initialState: {
        selectedFrom: {},
        selectedTo: {},
        resultValue: 0,
        search: '',
        reverse: true
    },
    reducers: {
        selectedFromCurrency(state, action) {
            state.selectedFrom = action.payload
        },
        selectedToCurrency(state, action) {
            state.selectedTo = action.payload
        },
        setResultValue(state, action) {
            state.resultValue = Number(action.payload.toFixed(2))
        },
        setSearch(state, action) {
            state.search = action.payload
        },
        setReverseReducer(state, action) {
            state.reverse = action.payload;
            const temp = state.selectedFrom;
            state.selectedFrom = state.selectedTo;
            state.selectedTo = temp;
        }

    }
})

export const { selectedFromCurrency, selectedToCurrency, setResultValue, setSearch, setReverseReducer } = choiseSlice.actions
export default choiseSlice.reducer