import { useEffect, useState } from 'react'
import './App.css'

import './scss/index.scss'
import PriceField from './Components/Ui/PriceField'

import Overlay from './Components/Overlay'

function App() {

  return (
    <div className="App">
      <div className="block-currency">
        <PriceField></PriceField>
        <PriceField></PriceField>
      </div>
      <Overlay></Overlay>
    </div >
  )
}

export default App
