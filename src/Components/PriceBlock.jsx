import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../store/modal/modalSlice';
import PriceField from './Ui/PriceField';
import DateChanging from './DateChanging';
import PriceFieldSkeleton from './Ui/PriceFieldSkeleton';



const defaultBlock = () => {
    return (
        <>
            <img src={`https://flagsapi.com/UA/flat/64.png`}></img>
            UAN
        </>
    )
}
const changeBlock = (name) => {
    return (
        <>
            <img src={`https://flagsapi.com/${name.slice(0, -1)}/flat/64.png`}></img>
            {name}
        </>
    )
}

const PriceBlock = ({ mutableField }) => {

    // TODO mutableField use PropTypes
    const selectedCurrency = useSelector((state) => state.currency.value);

    const dispatch = useDispatch();
    const handlerVisibleModal = () => {
        dispatch(setModal(true))
    }

    return (
        <div className='selected-currency'>
            <DateChanging />
            <div className="selected-currency__title">
                {selectedCurrency && mutableField ? `Мені потрібно: ${selectedCurrency.txt}` : 'В мене є гривня'}
            </div>
            <div className='selected-currency__field'>
                {selectedCurrency ?
                    <PriceField mutableField={mutableField} selected={selectedCurrency}></PriceField>
                    :
                    <PriceFieldSkeleton />
                }

            </div>
            <button onClick={() => handlerVisibleModal()} className='selected-currency__toggle' disabled={!mutableField}>
                {selectedCurrency && mutableField ? changeBlock(selectedCurrency.cc) : defaultBlock()}
            </button>
        </div>
    );
};

PriceBlock.defaultProps = {
    mutableField: false
}

export default PriceBlock;