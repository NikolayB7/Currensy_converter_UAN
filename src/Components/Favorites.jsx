import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {selectedFromCurrency, selectedToCurrency} from "../store/choiseSlice";

const Favorites = ({ fromField }) => {
    const favoritesFromList = useSelector(state => state.favoriteCurrency.favoriteFrom)
    const favoritesToList = useSelector(state => state.favoriteCurrency.favoriteTo)
    const dispatch = useDispatch();
    const [list,setList] = useState([])
    useEffect(()=>{
        if(fromField){
            setList(favoritesFromList)
        }else{
            setList(favoritesToList)
        }
    },[favoritesFromList,favoritesToList])

    const selectCurrency =(obj)=>{
        fromField ? dispatch(selectedFromCurrency(obj)) : dispatch(selectedToCurrency(obj))
    }

    return (
        <div className="favorites">
            <ul className="favorites__list">
                {list.map(item => <li
                    key={`${item.cc}_${Math.random().toFixed(2)}`}
                    className="favorites__item"
                    onClick={()=>selectCurrency(item)}>{item.cc}</li>)}
            </ul>
        </div>
    );
};

export default Favorites;