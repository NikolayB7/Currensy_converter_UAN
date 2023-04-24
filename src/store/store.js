import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import currencyReducer from './currency/selectedCurrencySlice'
import modalReducer from './modal/modalSlice'

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    modal: modalReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',

})