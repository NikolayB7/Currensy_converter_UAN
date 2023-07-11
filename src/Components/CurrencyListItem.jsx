import React, { useState } from 'react';
import favoritesImg from "../assets/img/favorites.svg"
import noFavoritesImg from "../assets/img/no-favorites.svg"
import { useDispatch } from 'react-redux';
import { selectFavorites } from "../store/favoritesSlice"
import { selectedFromCurrency, selectedToCurrency } from "../store/choiseSlice"

const CurrencyListItem = ({ cur, setShowList, outField, setTypeField }) => {
    const [favorites, setFavorites] = useState(false)
    const dispatch = useDispatch();

    function addFavorites(cur) {
        setFavorites(!favorites)
        dispatch(selectFavorites({ cur }))
    }

    function chooseCurrency(obj) {
        setShowList(false)
        setTypeField('number')
        outField ? dispatch(selectedFromCurrency(obj)) : dispatch(selectedToCurrency(obj))
    }

    const CreateFlag = ({ name }) => {
        if (cur.cc.includes('EU') ||
            cur.cc.includes('XD') ||
            cur.cc.includes('XAU') ||
            cur.cc.includes('XAG') ||
            cur.cc.includes('XPT') ||
            cur.cc.includes('XPD')) {
            return
        }
        return (
            <img src={`https://flagsapi.com/${name.slice(0, -1)}/flat/32.png`} alt="flag" className='field__list-flag' />
        )
    }

    return (
        <li className='field__list-item'>
            <div className='content' onClick={() => chooseCurrency(cur)}>
                <CreateFlag name={cur.cc} />
                {cur.txt}
            </div>
            <div className='button' onClick={() => addFavorites(cur)}>
                <img src={favorites ? favoritesImg : noFavoritesImg} alt="favorites" className='field__list-star' />
            </div>
        </li>
    );
};

export default CurrencyListItem;