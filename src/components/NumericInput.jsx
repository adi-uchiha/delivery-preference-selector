'use client'

import React, { useState } from 'react';
import PickUpDate from './PickUpDate';

const NumericInput = (props) => {
    const [value, setValue] = useState('');
    const [quantity, setQuantity] = useState(55)
    const [errorMsg, setErrorMsg] = useState(null)

    const handleChange = (event) => {
        const value = event.target.value
        if(/^\d*$/.test(value)){
            setValue(event.target.value)
            setQuantity(event.target.value)
        }else{
            setErrorMsg("Err");
            setInterval(() => {
                setErrorMsg(null)
            }, 4000);
        }
    };

    return (
        <>
            <div className='flex flex-col'>
                {/* <div className="flex flex-row items-center mx-auto bg-white p-4 rounded-lg shadow-md">
                    <label className="mb-2 text-gray-800 font-semibold pr-6" htmlFor="quantity">Quantity: </label>
                    <input
                        onChange={handleChange}
                        value={value}
                        id="quantity" name="quantity" type="text" className="block w-[17rem] px-4 py-2 bg-white border
                        border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                </div> */}
                    <span className='self-center text-red-500 items-center inline-flex'>{errorMsg ? "Only Integer": null}</span>
            </div>

            <PickUpDate quantity={quantity} setResult={props.setResult}/>
        </>
    );
};

export default NumericInput;
