import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteFrom: [],
        favoriteTo: []
    },
    reducers: {
        selectFromFavorites(state, action) {
            state.favoriteFrom.length > 5 ? state.favoriteFrom.shift() : state.favoriteFrom = [...state.favoriteFrom, action.payload.cur]
        },
        selectToFavorites(state, action) {
            state.favoriteTo.length > 5 ? state.favoriteTo.shift() : state.favoriteTo = [...state.favoriteTo, action.payload.cur]
        }
    }
})

export const { selectFromFavorites,selectToFavorites } = favoriteSlice.actions
export default favoriteSlice.reducer