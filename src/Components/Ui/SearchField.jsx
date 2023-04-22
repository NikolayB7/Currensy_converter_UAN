import React from 'react';

const SearchField = ({ setSearch }) => {

    return (
        <>
            <input type="search" onChange={e => setSearch(e.target.value)} />
        </>
    );
};

export default SearchField;