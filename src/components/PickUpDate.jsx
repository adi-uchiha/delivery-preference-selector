'use client'

import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import MyButton from './MyButton';
import Logic from './Logic';

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const PickUpDate = ({ quantity, setResult }) => {

    const [value, setValue] = useState(new Date());
    const [isLoading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg]= useState(null)

    function processRequest() {
        const timeLineDiv = document.getElementById('animatedDiv');
        timeLineDiv.classList.remove('show')
        setLoading(true)
        const pastValue = new Date(value)
        if(pastValue.setMinutes(pastValue.getMinutes()+1) < new Date()) {
            setErrorMsg("Cannot choose past time for pickup")
            return
        } else {setErrorMsg(null)}
        const copyValue = new Date(value)
        const results = Logic(copyValue, quantity)
        setResult(results)

        setTimeout(function() {timeLineDiv.classList.add('show')}, 500)

        const progressValue = document.querySelector('.progress-value');
        progressValue.classList.add('loading-animation');
        setTimeout(() => {progressValue.classList.remove('loading-animation');}, 2700);
        setLoading(false)
    }
    return <>
        <div className='flex flex-col'>
            <div className="flex flex-row items-center mx-auto bg-white p-4 rounded-lg shadow-md">
                <span className='font-semibold pr-4'>Select time: </span>
                <DateTimePicker format='dd/MM/y h:mm a' onChange={setValue} value={value} />
            </div>
                <span className='text-red-600 items-center self-center pt-2 pb-10'>{errorMsg}</span>
            <MyButton text={"Confirm"} loading={isLoading} clickFunction={processRequest} />
        </div>
    </>
}

export default PickUpDate