import React, { useState, useRef, useEffect } from 'react';
import arrowDown from "../assets/img/arrow-down.svg"
import flag from "../assets/img/flag.jpg"
import favoritesImg from "../assets/img/favorites.svg"
import noFavoritesImg from "../assets/img/no-favorites.svg"

const CurrencyFrom = () => {

    const [showList, setShowList] = useState(false)
    const [favorites, setFavorites] = useState(false)
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

    function addFavorites() {
        setFavorites(!favorites)
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
                        <li className='field__list-item'>
                            <div className='content'>
                                <img src={flag} alt="flag" className='field__list-flag' />
                                American dollar
                            </div>
                            <div className='button' onClick={() => addFavorites()}>
                                <img src={favorites ? noFavoritesImg : favoritesImg} alt="favorites" className='field__list-star' />
                            </div>
                        </li>
                        <li className='field__list-item'>
                            <div className='content'>
                                <img src={flag} alt="flag" className='field__list-flag' />
                                American dollar
                            </div>
                            <div className='button'>
                                <img src={favorites ? noFavoritesImg : favoritesImg} alt="favorites" className='field__list-star' />
                            </div>
                        </li>
                        <li className='field__list-item'>
                            <div className='content'>
                                <img src={flag} alt="flag" className='field__list-flag' />
                                American dollar
                            </div>
                            <div className='button'>
                                <img src={favorites ? noFavoritesImg : favoritesImg} alt="favorites" className='field__list-star' />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="favorites">
                <ul className="favorites__list">
                    <li className="favorites__item">GBR</li>
                    <li className="favorites__item">USD</li>
                    <li className="favorites__item">EUR</li>
                    <li className="favorites__item">UAN</li>
                </ul>
            </div>

        </div>
    );
};

export default CurrencyFrom;