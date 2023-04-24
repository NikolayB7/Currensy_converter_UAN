import React from 'react';

const SearchField = ({ setSearch, search }) => {

    return (
        <>
            <input className='form-control form-control_search' type="search" value={search} onChange={e => setSearch(e.target.value)} />
        </>
    );
};

export default SearchField;