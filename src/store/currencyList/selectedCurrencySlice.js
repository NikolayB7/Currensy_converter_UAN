import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const currencySlice = createSlice({
    name: 'selectedCurrency',
    initialState,
    reducers: {
        setCurrency: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setCurrency } = currencySlice.actions
export default currencySlice.reducer