import React, { useEffect, useRef, useState } from 'react';
import CurrencyServise from '../Api/currency';

import { useDispatch } from 'react-redux';
import { setCurrency } from '../store/currency/selectedCurrencySlice';
import { setModal } from '../store/modal/modalSlice';
import Bookmark from './Ui/Bookmark';


const CurrensyList = ({ searchString, setSearch }) => {
    const CurrencyServiseRef = useRef(new CurrencyServise());

    const [list, setList] = useState([])

    const dispatch = useDispatch();

    const handleCurrencyChange = (obj) => {
        dispatch(setCurrency(obj));
        dispatch(setModal(false));
        // setSearch('')
    };

    useEffect(() => {
        const getCurrency = () => {
            CurrencyServiseRef.current.getAllCurrency()
                // TODO перенести в api файл
                .then(response => {
                    setList(response)
                    const filteredArr = response.filter(obj => obj.txt.toLowerCase().includes(searchString));
                    setList(filteredArr)
                })
                .catch(error => {
                    console.log(`Error load ${error}`);
                })
        }
        getCurrency()

    }, [searchString])


    return (
        <>
            <ul className='currensy-list'>
                {list.slice(0, 10).map(item =>
                    <li key={item.cc}>
                        <div className='currensy-list__item' onClick={() => handleCurrencyChange(item)}>
                            <div className='currensy-list__flag'>
                                <img src={`https://flagsapi.com/${item.cc.slice(0, -1)}/flat/64.png`}></img>
                            </div>
                            {item.txt}
                        </div>
                        <Bookmark />
                    </li>
                )}
            </ul>
        </>
    );
};

export default CurrensyList;