import { useEffect, useRef, useState } from 'react'
import './App.css'

import './assets/scss/index.scss'


import { useDispatch } from 'react-redux';
import { setCurrency } from './store/currencyList/selectedCurrencySlice';
import Header from './Components/Header';
import CurrencyFrom from './Components/CurrencyFrom';
import DateField from './Components/DateField';


function App() {



  return (
    <div className="App">
      <Header />
      <div className="container">
        <h2 className='page-title text-center'>Конвертер валют</h2>

        <div className="field-wrapper">

          <CurrencyFrom />
          <CurrencyFrom />
          <DateField />
        </div>
      </div>
    </div >
  )
}

export default App
