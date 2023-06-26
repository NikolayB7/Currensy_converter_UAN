import React, { useState, useRef, useEffect } from 'react';
import arrowDown from "../assets/img/arrow-down.svg"
import CurrencyListItem from './CurrencyListItem';
import Favorites from './Favorites';

const CurrencyFrom = ({ list }) => {
    const [showList, setShowList] = useState(false)

    const refOutside = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (refOutside.current && !refOutside.current.contains(event.target)) {
                setShowList(false)
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [refOutside]);

    const toggleCurrencyList = () => {
        setShowList(!showList)
    }

    return (
        <div className='field' ref={refOutside}>
            <div className="field__title">From</div>
            <div className="field__wrap">
                <input type="text" className='field__control' onFocus={() => setShowList(false)} />
                <button className='field__show' onClick={() => toggleCurrencyList()}>
                    USD
                    <img src={arrowDown} alt="arrow" className='field__arrow' />
                </button>
                <div className={`field__list-wrap ${showList ? 'active' : ''}`} >
                    <ul className="field__list">
                        {list.map((item) => <CurrencyListItem key={item.r030} cur={item} />)}
                    </ul>
                </div>
            </div>

            <Favorites />

        </div>
    );
};

export default CurrencyFrom;