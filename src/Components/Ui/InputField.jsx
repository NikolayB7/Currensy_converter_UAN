import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectedToCurrency, setResultValue } from "../../store/choiseSlice"

const InputField = ({ outField }) => {
    const currencyResult = useSelector(state => state.selectedCurrency.resultValue)
    const currencyFrom = useSelector(state => state.selectedCurrency.selectedFrom)
    const currencyToVal = useSelector(state => state.selectedCurrency.selectedToVal)
    const dispatch = useDispatch()

    const [fromValue, setFromValue] = useState('')
    const [toValue, setToValue] = useState(currencyResult)

    useEffect(() => {
        setToValue(currencyResult)
    }, [currencyResult])

    const calculatePrice = (e) => {
        let inputValue = Number(e.target.value),
            result;
        setFromValue(inputValue)
        if (currencyFrom.cc === 'UAN') {
            result = inputValue / currencyToVal
        } else {
            result = (inputValue / currencyFrom.rate) * currencyToVal
        }
        dispatch(setResultValue(result));

    }

    return (
        <input
            disabled={!outField}
            value={outField ? fromValue : toValue}
            className='field__control'
            type="number"
            onChange={(e) => calculatePrice(e)} />
    );
};

export default InputField;