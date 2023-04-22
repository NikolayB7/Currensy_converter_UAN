import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../store/modal/modalSlice';

const PriceField = () => {

    const selectedCurrency = useSelector((state) => state.currency.value);

    const dispatch = useDispatch();
    const handlerVisibleModal = () => {
        dispatch(setModal(true))
    }

    return (
        <div>
            <div className="title">
                {selectedCurrency
                    ?
                    selectedCurrency.txt
                    :
                    'Українська гривня'
                }
            </div>
            <div className='form-control'>
                <input className='form-control__field' type="text" />
                <button onClick={() => handlerVisibleModal()} className='form-control__btn'>
                    {selectedCurrency
                        ?
                        <img src={`https://flagsapi.com/${selectedCurrency.cc.slice(0, -1)}/flat/64.png`}></img>
                        :
                        <img src={`https://flagsapi.com/UA/flat/64.png`}></img>
                    }

                </button>
            </div>
        </div>
    );
};

export default PriceField;