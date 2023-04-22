import React, { useState } from 'react';

import SearchField from './Ui/SearchField'
import CurrensyList from './CurrensyList';

import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../store/modal/modalSlice';

const Overlay = () => {

    const [search, setSearch] = useState('')

    const dispatch = useDispatch()
    const handlerVisibleModal = () => {
        dispatch(setModal(false))
    }

    const stateModal = useSelector((state) => state.modal.value);

    return (
        <div className={stateModal ? 'overlay active' : 'overlay'}>
            <div className="overlay__shadow" onClick={() => handlerVisibleModal()}></div>
            <div className="overlay__body">
                <SearchField setSearch={setSearch}></SearchField>
                <CurrensyList searchString={search}></CurrensyList>
            </div>

        </div>
    );
};

export default Overlay;