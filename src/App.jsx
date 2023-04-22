import { useEffect, useState } from 'react'
import './App.css'

import './scss/index.scss'
import PriceField from './Components/Ui/PriceField'

import Overlay from './Components/Overlay'

function App() {
  const [currentCur, setCurrentCur] = useState({})
  const [visibleList, setVisibleList] = useState(!false)

  return (
    <div className="App">
      <div className="block-currency">
        <PriceField setVisibleList={setVisibleList}></PriceField>
        <PriceField setVisibleList={setVisibleList} currentCur={currentCur}></PriceField>
      </div>
      <Overlay setCurrentCur={setCurrentCur} setVisiblePopUp={setVisibleList} visiblePop={visibleList}></Overlay>
    </div >
  )
}

export default App
