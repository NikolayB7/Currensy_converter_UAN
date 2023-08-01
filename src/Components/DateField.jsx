import React, { forwardRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import arrowDown from "../assets/img/arrow-down.svg"
import calendar from "../assets/img/calendar.svg"
import CurrencyService from '../Api/currency';

const DateField = ({ setCurrencyList,setDefaultValue }) => {
    const [startDate, setStartDate] = useState(new Date());
    const currencyService = new CurrencyService();
    const dateParse = (str) => {
        const dateStr = str,
            date = new Date(dateStr),
            year = date.getFullYear(),
            month = String(date.getMonth() + 1).padStart(2, "0"),
            day = String(date.getDate()).padStart(2, "0"),
            formattedDate = `${year}${month}${day}`;
        return formattedDate
    }
    const getListDate = async (date) => {
        const response = await currencyService.getDateCurrency(dateParse(date));
        setCurrencyList(response)
        setDefaultValue(response)
        setStartDate(date)
    }

    const FieldDate = forwardRef(({ value, onClick }, ref) =>
    (
        <div className="field__wrap field__wrap_date">
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
            onChange={(date) => getListDate(date)}
            customInput={<FieldDate />}
            maxDate={new Date()}
            showYearDropdown
            dateFormatCalendar="MMMM"
            yearDropdownItemNumber={15}
            scrollableYearDropdown
            wrapperClassName='field'
        />
    );
};

export default DateField;