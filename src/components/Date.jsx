import React from 'react';
import {getDay, enDay} from '../utils/date';

export default function Date({date}){
    const [, , day] = date.split('/');
    return(
        <div className='date-wrapper'>
            <p className='date'>{day}</p>
            <p className='day'>{enDay(getDay(date))}</p>
        </div>
    )
}