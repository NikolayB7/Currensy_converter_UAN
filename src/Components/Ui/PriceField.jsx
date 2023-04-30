import React, { useEffect, useRef, useState } from 'react';

const PriceField = ({ mutableField, selected }) => {

    const [value, setValue] = useState(1)
    const [idField, setIdField] = useState('mutable')

    useEffect(() => {
        if (mutableField) {
            setIdField('unMutable')
            setValue(selected.rate.toFixed(2))
        }
    }, [selected])


    function handleChange(event) {
        const InputValue = event.target.value
        if (/^\d*$/.test(InputValue) && !mutableField) {
            setValue(InputValue);
        } else {
            setValue(InputValue);
        }

        const fieldDefault = document.getElementById(`currensy-mutable`)
        const fieldChanged = document.getElementById(`currensy-unMutable`)
        const result = parseFloat(fieldDefault.value) * parseFloat(fieldChanged.value)



        if (mutableField && result !== NaN) {
            // Second Field

            setValue(result)
        } else if (result !== NaN) {
            fieldChanged.value = result
            // First Field
            // setValue()
        }

    }

    function calculatePrice(event) {
        handleChange(event)


    }


    return (
        <>
            <input
                id={`currensy-${idField}`}
                className='form-control'
                type="number"
                value={value}
                onInput={calculatePrice}

            />
        </>
    );
};

export default PriceField;