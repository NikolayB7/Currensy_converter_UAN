import { useEffect, useRef, useState } from 'react'
import compareArrow from "./assets/img/compare-arrow.svg"
import './App.css'

import './assets/scss/index.scss'

import Header from './Components/Header';
import CurrencyBlock from './Components/CurrencyBlock';
import DateField from './Components/DateField';
import CurrencyService from './Api/currency.js';
import { useSelector, useDispatch } from "react-redux";
import { selectedFromCurrency, selectedToCurrency, setReverseReducer } from "./store/choiseSlice"
import Chart from './Components/Chart';

function App() {

    const [currencyList, setCurrencyList] = useState([])
    const currencyForm = useSelector(state => state.selectedCurrency.selectedFrom)
    const currencyTo = useSelector(state => state.selectedCurrency.selectedTo)
    const dispatch = useDispatch()
    const search = useSelector(state => state.selectedCurrency.search)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const currencyService = new CurrencyService();
                const data = await currencyService.getAllCurrency();
                setDefaultValue(data)
                setCurrencyList(data)
                const searchList = data.filter(obj => obj.txt.toLowerCase().includes(search));
                searchList.length && setCurrencyList(searchList)
            } catch (error) {
                alert('Ошибка получения данных')
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, [search]);

    function setDefaultValue(arr) {
        dispatch(selectedFromCurrency(arr.find(item => item.cc === 'UAH')))
        dispatch(selectedToCurrency(arr.find(item => item.cc === 'USD')))
    }
    function reverseField() {
        dispatch(setReverseReducer(!true))
    }
    return (
        <div className="App">
            <Header />
            <div className="container">
                <h2 className='page-title text-center'>Конвертер валют</h2>

                <div className="field-wrapper" id='сonverter'>

                    <CurrencyBlock
                        key={`FromField`}
                        selected={currencyForm}
                        list={currencyList} />
                    <CurrencyBlock
                        key={`ToField`}
                        outField={false}
                        selected={currencyTo}
                        list={currencyList} />

                    <button className='btn btn_reverse' onClick={() => reverseField()}>
                        <img src={compareArrow} alt="" />
                    </button>

                    <DateField
                        setDefaultValue={setDefaultValue}
                        setCurrencyList={setCurrencyList} />
                </div>

                <Chart />

            </div>
        </div >
    )
}

export default App
