import { useEffect, useRef, useState } from 'react'
import compareArrow from "./assets/img/compare-arrow.svg"
import './App.css'

import './assets/scss/index.scss'

import Header from './Components/Header';
import CurrencyBlock from './Components/CurrencyBlock';
import DateField from './Components/DateField';
import CurrencyService from './Api/currency.js';
import { useSelector, useDispatch } from "react-redux";
import { selectedFromCurrency, selectedToCurrency } from "./store/choiseSlice"
import Chart from './Components/Chart';

function App() {

    const [currencyList, setCurrencyList] = useState([])
    const currencyForm = useSelector(state => state.selectedCurrency.selectedFrom)
    const currencyTo = useSelector(state => state.selectedCurrency.selectedTo)
    const dispatch = useDispatch()
    const [reverse, setReverse] = useState(true)
    const search = useSelector(state => state.selectedCurrency.search)



    useEffect(() => {
        const fetchData = async () => {
            try {
                const currencyService = new CurrencyService();
                const data = await currencyService.getAllCurrency();
                let uah = {
                    "txt": "Українська гривня",
                    "rate": 1,
                    "cc": "UAH",
                }
                data.unshift(uah)
                setDefaultValue(data)
                setCurrencyList(data)
                const searchList = data.filter(obj => obj.txt.toLowerCase().includes(search));
                setCurrencyList(searchList)
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, [search]);

    function setDefaultValue(arr) {
        dispatch(selectedFromCurrency(arr.find(item => item.cc === 'UAH')))
        dispatch(selectedToCurrency(arr.find(item => item.cc === 'USD')))
    }

    return (
        <div className="App">
            <Header />
            <div className="container">
                <h2 className='page-title text-center'>Конвертер валют</h2>

                <div className="field-wrapper">

                    {reverse
                        ?
                        <>
                            <CurrencyBlock
                                key={`FromField`}
                                selected={currencyForm}
                                list={currencyList} />
                            <CurrencyBlock
                                key={`ToField`}
                                outField={false}
                                selected={currencyTo}
                                list={currencyList} />
                        </>
                        :
                        <>
                            <CurrencyBlock
                                key={`ToField`}
                                selected={currencyTo}
                                list={currencyList} />
                            <CurrencyBlock
                                key={`FromField`}
                                outField={false}
                                selected={currencyForm}
                                list={currencyList} />
                        </>
                    }

                    <button className='btn btn_reverse' onClick={() => setReverse(!reverse)}>
                        <img src={compareArrow} alt="" />
                    </button>
                    <DateField
                        setCurrencyList={setCurrencyList} />
                </div>

                <Chart />

            </div>
        </div >
    )
}

export default App
