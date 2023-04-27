import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../store/modal/modalSlice';
import PriceField from './Ui/PriceField';
import DateChanging from './DateChanging';
<<<<<<< HEAD
import Loader from './Ui/Loader';


const defaultBlock = () => {
=======


const defaultValuerency = () => {
>>>>>>> e6953e9712b448051a905577f81eb88224276d66
    return (
        <>
            <img src={`https://flagsapi.com/UA/flat/64.png`}></img>
            UAN
        </>
    )
}
<<<<<<< HEAD
const changeBlock = (name) => {
=======
const checkCurrency = (name) => {
>>>>>>> e6953e9712b448051a905577f81eb88224276d66
    return (
        <>
            <img src={`https://flagsapi.com/${name.slice(0, -1)}/flat/64.png`}></img>
            {name}
        </>
    )
}

<<<<<<< HEAD
const PriceBlock = ({ mutableField }) => {

    // TODO mutableField use PropTypes
=======
const PriceBlock = ({ defaultValue }) => {

    // TODO defaultValue use PropTypes
>>>>>>> e6953e9712b448051a905577f81eb88224276d66
    const selectedCurrency = useSelector((state) => state.currency.value);

    const dispatch = useDispatch();
    const handlerVisibleModal = () => {
<<<<<<< HEAD
=======
        if (defaultValue) {
            return
        }
>>>>>>> e6953e9712b448051a905577f81eb88224276d66
        dispatch(setModal(true))
    }

    return (
        <div className='selected-currency'>
<<<<<<< HEAD
            {/* <DateChanging /> */}
            <div className="selected-currency__title">
                {selectedCurrency && mutableField ? `Мені потрібно: ${selectedCurrency.txt}` : 'В мене є гривня'}
            </div>
            <div className='selected-currency__field'>
                {selectedCurrency ?
                    <PriceField mutableField={mutableField} selected={selectedCurrency}></PriceField>
                    :
                    <Loader />
                }

            </div>
            <button onClick={() => handlerVisibleModal()} className='selected-currency__toggle' disabled={!mutableField}>
                {selectedCurrency && mutableField ? changeBlock(selectedCurrency.cc) : defaultBlock()}
=======
            <DateChanging />
            <div className="selected-currency__title">
                {selectedCurrency && !defaultValue
                    ?
                    `Мені потрібно: ${selectedCurrency.txt}`
                    :
                    'В мене є гривня'
                }
            </div>
            <div className='selected-currency__field'>
                <PriceField defaultValue={defaultValue} selected={selectedCurrency}></PriceField>
            </div>
            <button onClick={() => handlerVisibleModal()} className='selected-currency__toggle'>
                {selectedCurrency && !defaultValue ? checkCurrency(selectedCurrency.cc) : defaultValuerency()}
>>>>>>> e6953e9712b448051a905577f81eb88224276d66
            </button>
        </div>
    );
};

<<<<<<< HEAD
PriceBlock.defaultProps = {
    mutableField: false
}

=======
>>>>>>> e6953e9712b448051a905577f81eb88224276d66
export default PriceBlock;