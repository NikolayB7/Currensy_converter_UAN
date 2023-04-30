import React, { useEffect, useRef, useState } from 'react';

const PriceFieldSkeleton = ({ mutableField, selected }) => {


    return (
        <>
            <input

                className='form-control form-control_skeleton'
                type="number"


            />
        </>
    );
};

export default PriceFieldSkeleton;