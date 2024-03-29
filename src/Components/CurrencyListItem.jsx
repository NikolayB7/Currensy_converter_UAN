import React, { useState } from 'react';
import favoritesImg from "../assets/img/favorites.svg"
import noFavoritesImg from "../assets/img/no-favorites.svg"
import { useDispatch } from 'react-redux';
import { selectFromFavorites,selectToFavorites } from "../store/favoritesSlice"
import { selectedFromCurrency, selectedToCurrency } from "../store/choiseSlice"

const CurrencyListItem = ({ cur, setShowList, outField, setTypeField,fromField }) => {
    const [favorites, setFavorites] = useState(false)
    const dispatch = useDispatch();

    function addFavorites(cur) {
        setFavorites(!favorites)
        if(fromField){
            dispatch(selectFromFavorites({ cur }))
        }else{
            dispatch(selectToFavorites({ cur }))
        }
    }

    function chooseCurrency(obj) {
        setShowList(false)
        setTypeField('number')
        outField ? dispatch(selectedFromCurrency(obj)) : dispatch(selectedToCurrency(obj))
    }

    const CreateFlag = ({ name }) => {
        const currencies = ['EU', 'XD', 'XAU', 'XAG', 'XPT', 'XPD'];
        if (currencies.some(currency => cur.cc.includes(currency))) {
            return;
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