import React, { useState, useRef, useEffect } from 'react';
import arrowDown from "../assets/img/arrow-down.svg"
import CurrencyListItem from './CurrencyListItem';
import Favorites from './Favorites';
import InputField from "./Ui/InputField";
import {useSelector} from "react-redux";


const CurrencyFrom = ({ list }) => {
    const [showList, setShowList] = useState(false)
    const [selectedCoin,setSelectedCoin] = useState({cc:'USD'})
    const [formatting,setFormatting] = useState('text')
    const [holder, setHolder] = useState("");
    const [valueField, setValueField] = useState("");
    // const selectedFromCurrency = useSelector(state => state.selectedFromCurrency.selectedFrom)
    const refOutside = useRef(null);

    useEffect(()=>{setValueField(selectedCoin.rate)},[selectedCoin])
    useEffect(() => {
        function handleClickOutside(event) {
            if (refOutside.current && !refOutside.current.contains(event.target)) {
                setShowList(false)
                setFormatting('number')
                setHolder('Введіть число')
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [refOutside]);

    const toggleCurrencyList = () => {
        setFormatting(showList ?'number':'search')
        setHolder(`Введіть ${showList ? 'число':'валюту'}`)
        setShowList(!showList)
    }

    return (
        <div className='field' ref={refOutside}>
            <div className="field__title">From</div>
            <div className="field__wrap">
                <InputField
                    holder={holder}
                    format={formatting}
                    value={valueField}
                    setValueField={setValueField}
                    setShowList={setShowList}/>
                <button
                    className='field__show'
                    onClick={() => toggleCurrencyList()}>
                    {selectedCoin.cc}
                    <img src={arrowDown} alt="arrow" className='field__arrow' />
                </button>
                <div className={`field__list-wrap ${showList ? 'active' : ''}`} >
                    <ul className="field__list">
                        {showList && (
                            list.map((item) =>
                                <CurrencyListItem
                                    key={item.r030}
                                    cur={item}
                                    getSelectedCoin={setSelectedCoin}
                                    setShowList={setShowList}/>
                            )
                        )}
                    </ul>
                </div>
            </div>
            <Favorites />
        </div>
    );
};

export default CurrencyFrom;