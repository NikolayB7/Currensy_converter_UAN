import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteFrom: []
    },
    reducers: {
        selectFavorites(state, action) {
            state.favoriteFrom.length > 5 ? state.favoriteFrom.shift() : state.favoriteFrom = [...state.favoriteFrom, action.payload.cur]
        }
    }
})

export const { selectFavorites } = favoriteSlice.actions
export default favoriteSlice.reducer