import React, { useContext } from 'react';
import {getDay, enDay} from '../utils/date';
import { StoreContext } from '../store/Store';

export default function Date(){
    const {selectedDate} = useContext(StoreContext);
    const [, , day] = selectedDate.split('/');
    return(
        <div className='date-wrapper'>
            <p className='date'>{day}</p>
            <p className='day'>{enDay(getDay(selectedDate))}</p>
        </div>
    )
}