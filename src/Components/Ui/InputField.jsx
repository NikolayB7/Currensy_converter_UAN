import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setResultValue, setSearch } from "../../store/choiseSlice"

const InputField = ({ typeField, outField, holder }) => {
    const currencyResult = useSelector(state => state.selectedCurrency.resultValue)
    const currencyFrom = useSelector(state => state.selectedCurrency.selectedFrom)
    const currencyTo = useSelector(state => state.selectedCurrency.selectedTo)
    const currencyToVal = useSelector(state => state.selectedCurrency.selectedTo.rate)
    const dispatch = useDispatch()

    const [fromValue, setFromValue] = useState("")
    const [toValue, setToValue] = useState(currencyResult)

    useEffect(() => {
        setToValue(currencyResult)
    }, [currencyResult])
    useEffect(() => {
        setFromValue("")
        setToValue("")
    }, [typeField])
    useEffect(() => {
        if (typeField === 'number') {
            setFromValue("")
            setToValue("")
        }
    }, [currencyTo, currencyFrom])

    const calculatePrice = (e) => {
        setFromValue("")
        let inputValue = e.target.value, result;

        if (inputValue.startsWith('0') && inputValue.length > 1) {
            inputValue = inputValue.slice(1);
        }

        setFromValue(inputValue);

        if (currencyFrom.cc === 'UAH') {
            result = inputValue / currencyToVal
        }
        if (currencyTo.cc === 'UAH') {
            result = inputValue * currencyFrom.rate
        }
        if (currencyFrom.cc != 'UAH' && currencyTo.cc != 'UAH') {
            result = (inputValue / currencyFrom.rate) * currencyToVal
        }

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
            placeholder={holder}
            onChange={(e) => changeField(e)} />
    );
};
InputField.defaultProps = {
    typeField: 'number',
    holder: 'Введіть число'
}
export default InputField;