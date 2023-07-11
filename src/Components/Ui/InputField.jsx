import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setResultValue, setSearch } from "../../store/choiseSlice"

const InputField = ({ typeField, outField }) => {
    const currencyResult = useSelector(state => state.selectedCurrency.resultValue)
    const currencyFrom = useSelector(state => state.selectedCurrency.selectedFrom)
    const currencyTo = useSelector(state => state.selectedCurrency.selectedTo)
    const currencyToVal = useSelector(state => state.selectedCurrency.selectedToVal)
    const dispatch = useDispatch()

    const [fromValue, setFromValue] = useState(0)
    const [toValue, setToValue] = useState(currencyResult)

    useEffect(() => {
        setToValue(currencyResult)
    }, [currencyResult])
    useEffect(() => {
        setFromValue(0)
        setToValue(0)
    }, [currencyTo, currencyFrom])

    const calculatePrice = (e) => {
        setFromValue(0)
        let inputValue = e.target.value, result;

        if (inputValue.startsWith('0') && inputValue.length > 1) {
            inputValue = inputValue.slice(1);
        }
        setFromValue(inputValue);
        (currencyFrom.cc === 'UAH') ? result = inputValue / currencyToVal : result = (inputValue / currencyFrom.rate) * currencyToVal
        dispatch(setResultValue(result));
    }

    const findCurrency = (e) => {
        let str = e.target.value
        setFromValue(str)
        dispatch(setSearch(str))
        console.log(str);
    }

    const changeField = (e) => {
        if (typeField === 'number') {
            calculatePrice(e)
        } else {
            findCurrency(e)
        }

    }

    return (
        <input
            disabled={!outField}
            value={outField ? fromValue : toValue}
            className='field__control'
            type={typeField}
            onChange={(e) => changeField(e)} />
    );
};
InputField.defaultProps = {
    typeField: 'number'
}
export default InputField;