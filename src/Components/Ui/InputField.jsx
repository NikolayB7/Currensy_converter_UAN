import React, {useEffect, useState} from 'react';

const InputField = ({format,holder,value,setValueField}) => {
    // const [val, setVal] = useState("");

    // useEffect(()=>{setVal(rate)},[rate])
    const handleChange = (e) => {
        const regex = /^[0-9\b]+$/;
        (e.target.value === "" || regex.test(e.target.value)) && setValueField(e.target.value);
    };
    function formatValue(e) {

        switch (format) {
            case 'number':
                handleChange(e)
                break;
            case 'search':
                setValueField(e.target.value)
                break;
        }
    }
    return (
        <input
            className='field__control'
            type={format}
            value={value}
            placeholder={holder}
            onChange={(e)=>formatValue(e)} />
    );
};

export default InputField;