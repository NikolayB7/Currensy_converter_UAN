import { useEffect, useState } from 'react'
import './App.css'

import './assets/scss/index.scss'
import PriceField from './Components/Ui/PriceField'

import Overlay from './Components/Overlay'

function App() {

  return (
    <div className="App">
      <div className="page-title">Офіційний курс гривні <br /> щодо іноземних валют (НБУ)</div>
      <div className="selected-currency__wrapper">
        <PriceField defaultCur={false}></PriceField>
        <PriceField defaultCur={true}></PriceField>
      </div>
      <Overlay></Overlay>
    </div >
  )
}

export default App
