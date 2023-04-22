import React, { useState } from 'react';

import SearchField from './Ui/SearchField'
import CurrensyList from './CurrensyList';
const Overlay = ({ setCurrentCur, setVisiblePopUp, visiblePop }) => {

    const [search, setSearch] = useState('')

    return (
        <div className={visiblePop ? 'overlay active' : 'overlay'}>
            <div className="overlay__shadow" onClick={() => setVisiblePopUp(false)}></div>
            <div className="overlay__body">
                <SearchField setSearch={setSearch}></SearchField>
                <CurrensyList setCurrentCur={setCurrentCur} searchString={search}></CurrensyList>
            </div>

        </div>
    );
};

export default Overlay;