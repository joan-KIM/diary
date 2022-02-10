import React from "react";
import Category from "./Category";
import Calendar from "./Calendar";

export default function Monthly({date, changeHandler, toggleHandler}) {
    return(
        <div className='monthly'>
            <Category />
            <Calendar date={date} changeHandler={changeHandler} toggleHandler={toggleHandler} />
        </div>
    )
}