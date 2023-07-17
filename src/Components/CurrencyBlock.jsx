import React, { useState, useRef, useEffect } from 'react';
import arrowDown from "../assets/img/arrow-down.svg"
import CurrencyListItem from './CurrencyListItem';
import Favorites from './Favorites';
import InputField from "./Ui/InputField";

const CurrencyBlock = ({ selected, outField, list }) => {
    const [showList, setShowList] = useState(false)
    const [typeField, setTypeField] = useState('number')
    const refOutside = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (refOutside.current && !refOutside.current.contains(event.target)) {
                setShowList(false)
                setTypeField('number')
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [refOutside]);

    const toggleCurrencyList = () => {
        setShowList(!showList)
        setTypeField('text')

    }

    return (
        <div className='field' ref={refOutside}>
            <div className="field__title">{outField ? 'From' : 'To'}</div>
            <div className="field__wrap">
                <InputField
                    typeField={typeField}
                    outField={outField}
                    setShowList={setShowList} />
                <button
                    className='field__show'
                    onClick={() => toggleCurrencyList()}>
                    {selected.cc}
                    <img src={arrowDown} alt="arrow" className='field__arrow' />
                </button>
                <div className={`field__list-wrap ${showList ? 'active' : ''}`} >
                    <ul className="field__list">
                        {showList && (
                            list.map((item) =>
                                <CurrencyListItem
                                    key={`${item.cc}_${outField ? 'From' : 'To'}`}
                                    cur={item}
                                    outField={outField}
                                    setShowList={setShowList}
                                    setTypeField={setTypeField} />
                            )
                        )}
                    </ul>
                </div>
            </div>
            <Favorites />
        </div>
    );
};

CurrencyBlock.defaultProps = {
    outField: true
}
export default CurrencyBlock;