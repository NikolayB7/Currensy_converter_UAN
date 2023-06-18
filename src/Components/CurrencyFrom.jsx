import React from 'react';
import arrowDown from "../assets/img/arrow-down.svg"
import flag from "../assets/img/flag.jpg"
import favorites from "../assets/img/favorites.svg"
import noFavorites from "../assets/img/no-favorites.svg"

const CurrencyFrom = () => {
    return (
        <div className='field'>
            <div className="field__wrap">
                <input type="text" className='field__control' />
                <button className='field__show'>
                    USD
                    <img src={arrowDown} alt="arrow" className='field__arrow' />
                </button>
            </div>
            <ul className="field__list">
                <li className='field__list-item'>
                    <img src={flag} alt="flag" className='field__list-flag' />
                    American dollar
                    <img src={favorites} alt="favorites" className='field__list-star' />
                </li>
                <li className='field__list-item'>
                    <img src={flag} alt="flag" className='field__list-flag' />
                    American dollar
                    <img src={favorites} alt="favorites" className='field__list-star' />
                </li>
                <li className='field__list-item'>
                    <img src={flag} alt="flag" className='field__list-flag' />
                    American dollar
                    <img src={favorites} alt="favorites" className='field__list-star' />
                </li>
            </ul>
        </div>
    );
};

export default CurrencyFrom;