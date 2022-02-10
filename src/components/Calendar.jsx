import React from "react";
import DatePicker from "./DatePicker";
import TimelineItem from "./TimelineItem";

export default function Calendar({date, changeHandler, toggleHandler, events}){
    const items = events.map( event => <TimelineItem title={event.title} place={event.place} category={event.category} />)

    return (
        <div className='calendar-section' >
            <div className='calendar-container'>
               <DatePicker selectedDate={date} changeHandler={changeHandler}></DatePicker>

               <button className='add-event-btn' onClick={e => toggleHandler(e)} >Add Event</button>
               
                <ul className='timeline'>
                   {items}
                </ul>
            </div>
        </div>
    )
}