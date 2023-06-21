import React, { forwardRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import arrowDown from "../assets/img/arrow-down.svg"
import calendar from "../assets/img/calendar.svg"

const DateField = () => {
    const [startDate, setStartDate] = useState(new Date());
    const FieldDate = forwardRef(({ value, onClick }, ref) =>
    (
        <div className="field__wrap">
            <input type="text" className='field__control' defaultValue={value} />
            <button className='field__show' onClick={onClick} ref={ref}>
                <img src={calendar} alt="calendar" className='field__arrow' />
                <img src={arrowDown} alt="arrow" className='field__arrow' />
            </button>
        </div>
    ));

    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<FieldDate />}
            wrapperClassName='field' />
    );
};

export default DateField;