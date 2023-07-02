import { useEffect, useRef, useState } from 'react'
import './App.css'

import './assets/scss/index.scss'

import Header from './Components/Header';
import CurrencyFrom from './Components/CurrencyFrom';
import DateField from './Components/DateField';
import CurrencyService from './Api/currency.js';

function App() {

  const [currencyList, setCurrencyList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currencyService = new CurrencyService();
        const data = await currencyService.getAllCurrency();
        setCurrencyList(data)
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="App">
      <Header />
      <div className="container">
        <h2 className='page-title text-center'>Конвертер валют</h2>

        <div className="field-wrapper">

          <CurrencyFrom list={currencyList} />
          <CurrencyFrom list={currencyList} />
          <DateField />
        </div>
      </div>
    </div >
  )
}

export default App
