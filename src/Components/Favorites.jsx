import React from 'react';
import { useSelector } from "react-redux"

const Favorites = () => {
    const favoritesList = useSelector(state => state.favoriteCurrency.favoriteFrom)
    return (
        <div className="favorites">
            <ul className="favorites__list">
                {favoritesList.map(item => <li key={item.cc} className="favorites__item">{item.cc}</li>)}
            </ul>
        </div>
    );
};

export default Favorites;