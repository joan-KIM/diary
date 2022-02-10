import React, {useState} from "react";
import DatePicker from "./DatePicker";
import TimelineItem from "./TimelineItem";
import Modal from "./Modal";

export default function Calendar({date, changeHandler, categoryLabels, saveEvent, events}){
    const items = events.map( event => <TimelineItem title={event.title} place={event.place} category={event.category} startTime={event.startTime} endTime={event.endTime} />)

    const [isShown, setIsShown] = useState(false);
    const openModal = () => setIsShown(true);
    const closeModal = () => setIsShown(false);

    return (
        <div className='calendar-section' >
            <div className='calendar-container'>
               <DatePicker selectedDate={date} changeHandler={changeHandler}></DatePicker>

               <button className='add-event-btn' onClick={e => openModal(e)} >Add Event</button>

               {isShown 
               &&
               <Modal 
                    closeModal={closeModal}
                    categoryLabels={categoryLabels} 
                    saveEvent={saveEvent}
                /> }
               
                <ul className='timeline'>
                   {items}
                </ul>
            </div>
        </div>
    )
}