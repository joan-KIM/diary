import React from "react";
import DatePicker from "./DatePicker";

export default function Calendar({date, changeHandler}){
    return (
        <div className='calendar-section' >
            <div className='calendar-container'>
               <DatePicker date={date} changeHandler={changeHandler}></DatePicker>
            </div>
        </div>
    )
}