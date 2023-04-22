import React, { useEffect, useRef, useState } from 'react';
import CurrencyServise from '../Api/currency';
const CurrensyList = ({ setCurrentCur, searchString }) => {
    const CurrencyServiseRef = useRef(new CurrencyServise());

    const [list, setList] = useState([])

    useEffect(() => {
        const getCurrency = () => {
            let searchResult = []
            CurrencyServiseRef.current.getAllCurrency()
                // @TODO перенести в api файл
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
        <ul className='currensy-list'>
            {list.slice(0, 10).map(item =>
                <li className='currensy-list__item' key={item.cc} onClick={() => setCurrentCur(item)}>
                    <div className='currensy-list__flag'>
                        <img src={`https://flagsapi.com/${item.cc.slice(0, -1)}/flat/64.png`}></img>
                    </div>
                    {item.txt}
                </li>
            )}
        </ul>
    );
};

export default CurrensyList;