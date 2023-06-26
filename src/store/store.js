import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import currencyReducer from './currencyList/selectedCurrencySlice'
import favoritesReducer from './favoritesSlice'
export const store = configureStore({
  reducer: {
    currencyList: currencyReducer,
    favoriteCurrency: favoritesReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})
