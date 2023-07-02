import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import { selectedFromCurrency,selectedToCurrency } from "../../store/choiseSlice"

const InputField = ({outField}) => {
    const [valueField, setValueField] = useState("");
    const currencyForm = useSelector(state => state.selectedCurrency.selectedFrom.rate).toFixed(2)
    const currencyTo = useSelector(state => state.selectedCurrency.selectedTo.rate).toFixed(2)

    useEffect(()=>{
        outField ? setValueField(currencyForm) : setValueField(currencyTo)
    },[outField, currencyForm, currencyTo])

    const handleChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if(e.target.value === "" || regex.test(e.target.value)){
            setValueField(e.target.value)
        };
    };

    return (
        <input
            className='field__control'
            type="number"
            value={valueField}
            onChange={(e)=>handleChange(e)} />
    );
};

export default InputField;