import React from "react";
import {toDateObj, enMonth} from '../utils/date'

export default function Calendar({date, changeHandler}){
    const dateObj = toDateObj(date);
    const year = dateObj.getFullYear();
    const month = enMonth(dateObj.getMonth());

    return (
        <div className='calendar-wrapper' >
            <div className='calendar-container'>
                <div className='calendar-header'>
                    <p className='month'>{month}</p>
                    <p className='year'>{year}</p>
                </div>
                <input type='datetime-local' onChange={e => changeHandler(e.target.value)}></input>
            </div>
        </div>
    )
}