import React, { useState } from 'react';
import flag from "../assets/img/flag.jpg"
import favoritesImg from "../assets/img/favorites.svg"
import noFavoritesImg from "../assets/img/no-favorites.svg"
import { useDispatch } from 'react-redux';
import { selectFavorites } from "../store/favoritesSlice"
// import { selectedFromCurrency } from "../store/choiseSlice"

const CurrencyListItem = ({ cur,getSelectedCoin,setShowList }) => {
    const [favorites, setFavorites] = useState(false)
    const dispatch = useDispatch();

    function addFavorites(cur) {
        setFavorites(!favorites)
        dispatch(selectFavorites({ cur }))
    }

    function chooseCurrency(obj) {
        // dispatch(selectedFromCurrency(obj))
        getSelectedCoin(obj)
        setShowList(false)
    }

    return (
        <li className='field__list-item'>
            <div className='content' onClick={() => chooseCurrency(cur)}>
                {!(cur.cc.includes('EU')||cur.cc.includes('XD')||cur.cc.includes('XAU')||cur.cc.includes('XAG')||cur.cc.includes('XPT')||cur.cc.includes('XPD'))
                    &&
                    <img src={`https://flagsapi.com/${cur.cc.slice(0, -1)}/flat/32.png`} alt="flag" className='field__list-flag' />
                }
                {cur.txt}
            </div>
            <div className='button' onClick={() => addFavorites(cur)}>
                <img src={favorites ? favoritesImg : noFavoritesImg} alt="favorites" className='field__list-star' />
            </div>
        </li>
    );
};

export default CurrencyListItem;