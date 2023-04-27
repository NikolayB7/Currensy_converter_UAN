import React, { useEffect, useState } from 'react';

const PriceField = ({ mutableField, selected }) => {

    const [value, setValue] = useState(1)

    useEffect(() => {
        if (mutableField) {
            setValue(selected.rate)
        }
    }, [selected])


    function handleChange(event) {
        if (/^\d*$/.test(event.target.value)) {
            setValue(event.target.value);
        }

        // if (mutableField) {
        //     console.log(value);
        // } else {
        //     console.log(selected.rate);
        //     setValue()
        // }
    }



    return (
        <>
            <input
                className='form-control'
                type="text"
                value={value}
                onInput={handleChange}
            />
        </>
    );
};

export default PriceField;