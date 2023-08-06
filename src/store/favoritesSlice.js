import { createSlice } from '@reduxjs/toolkit'

const favoriteFromData = JSON.parse(localStorage.getItem('favoriteFromData'))
const favoriteToData = JSON.parse(localStorage.getItem('favoriteToData'))

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteFrom: (favoriteFromData) ? favoriteFromData : [],
        favoriteTo: (favoriteToData) ? favoriteToData : [],
    },
    reducers: {
        selectFromFavorites(state, action) {
            state.favoriteFrom.length > 5 ? state.favoriteFrom.shift() : state.favoriteFrom = [...state.favoriteFrom, action.payload.cur]
            localStorage.setItem('favoriteFromData', JSON.stringify(state.favoriteFrom));
        },
        selectToFavorites(state, action) {
            state.favoriteTo.length > 5 ? state.favoriteTo.shift() : state.favoriteTo = [...state.favoriteTo, action.payload.cur]
            localStorage.setItem('favoriteToData', JSON.stringify(state.favoriteTo))
        }
    }
})

export const { selectFromFavorites,selectToFavorites } = favoriteSlice.actions
export default favoriteSlice.reducer