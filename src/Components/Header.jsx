import React from 'react';

const Header = () => {
    const onClick = () => {
        window.location.href = "#converter";
    };

    const onClick2 = () => {
        window.location.href = "#chart";
    };
    return (
        <div className='header'>
            <div className="header__wrapper">
                <ul className='header__list'>
                    <li className='header__list-item' onClick={() => onClick()}><a className='header__list-link' href="#converter">Converter</a></li>
                    <li className='header__list-item' onClick={() => onClick2()}><a className='header__list-link' href="#chart">Chart</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;