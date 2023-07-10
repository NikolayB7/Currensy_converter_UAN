import { useEffect, useRef, useState } from 'react'
import './App.css'

import './assets/scss/index.scss'

import Header from './Components/Header';
import CurrencyBlock from './Components/CurrencyBlock';
import DateField from './Components/DateField';
import CurrencyService from './Api/currency.js';
import {useSelector,useDispatch} from "react-redux";
import { selectedFromCurrency,selectedToCurrency } from "./store/choiseSlice"

function App() {

    const [currencyList, setCurrencyList] = useState([])
    const currencyForm = useSelector(state => state.selectedCurrency.selectedFrom)
    const currencyTo = useSelector(state => state.selectedCurrency.selectedTo)
    const dispatch = useDispatch()


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
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, []);

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

                    <CurrencyBlock
                        key={`FromField`}
                        selected={currencyForm}
                        list={currencyList} />
                    <CurrencyBlock
                        key={`ToField`}
                        outField={false}
                        selected={currencyTo}
                        list={currencyList} />
                    {/*<DateField />*/}
                </div>
            </div>
        </div >
    )
}

export default App
