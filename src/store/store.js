import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import currencyReducer from './currencyList/selectedCurrencySlice'
import favoritesReducer from './favoritesSlice'
import selectedFromReducer from './choiseSlice'


export const store = configureStore({
  reducer: {
    favoriteCurrency: favoritesReducer,
    selectedCurrency: selectedFromReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware(),
  // devTools: process.env.NODE_ENV !== 'production',
})
