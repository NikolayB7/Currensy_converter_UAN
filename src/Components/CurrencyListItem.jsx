import React, { useState } from 'react';
import flag from "../assets/img/flag.jpg"
import favoritesImg from "../assets/img/favorites.svg"
import noFavoritesImg from "../assets/img/no-favorites.svg"
import { useDispatch } from 'react-redux';
import { selectFavorites } from "../store/favoritesSlice"

const CurrencyListItem = ({ cur }) => {
    const [favorites, setFavorites] = useState(false)
    const dispatch = useDispatch();

    function addFavorites(cur) {
        setFavorites(!favorites)
        dispatch(selectFavorites({ cur }))
    }

    return (
        <li className='field__list-item'>
            <div className='content'>
                <img src={`https://flagsapi.com/${cur.cc.slice(0, -1)}/flat/32.png`} alt="flag" className='field__list-flag' />
                {cur.txt}
            </div>
            <div className='button' onClick={() => addFavorites(cur)}>
                <img src={favorites ? favoritesImg : noFavoritesImg} alt="favorites" className='field__list-star' />
            </div>
        </li>
    );
};

export default CurrencyListItem;