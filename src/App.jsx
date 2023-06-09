import { useEffect, useRef } from 'react'
import './App.css'

import './assets/scss/index.scss'
import PriceBlock from './Components/PriceBlock'

import Overlay from './Components/Overlay'
import CurrencyServise from './Api/currency'


import { useDispatch } from 'react-redux';
import { setCurrency } from './store/currency/selectedCurrencySlice';

function App() {

  const CurrencyServiseRef = useRef(new CurrencyServise());
  const dispatch = useDispatch();
  useEffect(() => {
    const getCurrency = () => {
      CurrencyServiseRef.current.getAllCurrency()
        // TODO перенести в api файл
        .then(response => {
          dispatch(setCurrency(response.filter(item => item.cc == 'USD')[0]));
        })
        .catch(error => {
          console.log(`Error load ${error}`);
        })
    }
    getCurrency()
  }, [])

  return (
    <div className="App">
      <div className="page-title">Офіційний курс гривні <br /> щодо іноземних валют (НБУ)</div>
      <div className="selected-currency__wrapper">
        <PriceBlock></PriceBlock>
        <PriceBlock mutableField></PriceBlock>
      </div>
      <Overlay></Overlay>
    </div >
  )
}

export default App
