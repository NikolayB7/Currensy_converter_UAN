import React, {useEffect, useState} from 'react';

const InputField = ({rate,format}) => {
    const [val, setVal] = useState("");
    // useEffect(()=>{
    //     formatValue()
    // },[format])
    const handleChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setVal(e.target.value);
        }
    };
    function formatValue(e) {
        switch (format) {
            case 'number':
                handleChange(e)
                break;
            case 'search':
                setVal(e.target.value)
                break;
        }
    }
    return (
        <input
            className='field__control'
            type={format}
            value={val}
            onChange={(e)=>formatValue(e)} />
    );
};

export default InputField;