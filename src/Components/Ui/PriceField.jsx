import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../store/modal/modalSlice';


const defaultCurrency = () => {
    return (
        <>
            <img src={`https://flagsapi.com/UA/flat/64.png`}></img>
            UAN
        </>
    )
}
const checkCurrency = (name) => {
    return (
        <>
            <img src={`https://flagsapi.com/${name.slice(0, -1)}/flat/64.png`}></img>
            {name}
        </>
    )
}

const PriceField = ({ defaultCur }) => {

    // TODO defaultCur use PropTypes
    const selectedCurrency = useSelector((state) => state.currency.value);

    const dispatch = useDispatch();
    const handlerVisibleModal = () => {
        if (!defaultCur) {
            return
        }
        dispatch(setModal(true))
    }

    return (
        <div className='selected-currency'>
            <div className="selected-currency__title">
                {selectedCurrency && defaultCur
                    ?
                    selectedCurrency.txt
                    :
                    'Українська гривня'
                }
            </div>
            <div className='selected-currency__field'>
                <input className='form-control' type="text" />
            </div>
            <button onClick={() => handlerVisibleModal()} className='selected-currency__toggle'>
                {selectedCurrency && defaultCur ? checkCurrency(selectedCurrency.cc) : defaultCurrency()}
            </button>
        </div>
    );
};

export default PriceField;