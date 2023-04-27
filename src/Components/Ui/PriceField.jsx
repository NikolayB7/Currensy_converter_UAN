import React, { useEffect, useState } from 'react';

<<<<<<< HEAD
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
=======
const PriceField = ({ defaultValue, selected }) => {

    const [value, setValue] = useState(1)

    // useEffect(() => {
    //     setValue(selected.rate)
    // }, [])

    function calculatePrice(e) {
        if (defaultValue) {
            setValue(e.target.value)
        } else {
            setValue(selected.rate)
        }

>>>>>>> e6953e9712b448051a905577f81eb88224276d66
    }



    return (
        <>
            <input
                className='form-control'
<<<<<<< HEAD
                type="text"
                value={value}
                onInput={handleChange}
=======
                type="number"
                value={value}
                pattern="[0-9]"
                onInput={(event) => calculatePrice(event)}
>>>>>>> e6953e9712b448051a905577f81eb88224276d66
            />
        </>
    );
};

export default PriceField;