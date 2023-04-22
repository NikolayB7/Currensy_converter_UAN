import React, { useEffect } from 'react';

const PriceField = ({ setVisibleList, currentCur }) => {

    return (
        <div>
            <div className="title">
                {currentCur
                    ?
                    currentCur.txt
                    :
                    'Українська гривня'
                }
            </div>
            <div className='form-control'>
                <input className='form-control__field' type="text" />
                <button onClick={() => setVisibleList(true)} className='form-control__btn'>
                    {/* {currentCur
                        ?
                        <img src={`https://flagsapi.com/${currentCur.cc.slice(0, -1)}}/flat/64.png`}></img>
                        :
                        <img src={`https://flagsapi.com/UA/flat/64.png`}></img>
                    } */}

                </button>
            </div>
        </div>
    );
};

export default PriceField;