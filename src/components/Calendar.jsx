import React, {useState} from "react";
import DatePicker from "./DatePicker";
import TimelineItem from "./TimelineItem";
import Modal from "./Modal";

export default function Calendar({date, changeHandler, categoryLabels, saveEvent, events, deleteEvent}){
    const [isShown, setIsShown] = useState(false);
    const [editEvent, setEditEvent] = useState(null);
    const openModal = () => setIsShown(true);
    const closeModal = () => {
        setIsShown(false);
        setEditEvent(null);
    }
        
    const onClick = (event) => {
        setEditEvent(event);
        openModal();
    }

    const items = events.map( event => <TimelineItem 
        key={event.id} 
        id={event.id} 
        event={event}
        onClick={() => onClick(event)}
        />)

    return (
        <div className='calendar-section' >
            <div className='calendar-container'>
               <DatePicker selectedDate={date} changeHandler={changeHandler}></DatePicker>

               <button className='add-event-btn' onClick={e => {setEditEvent(null); openModal()} }>Add Event</button>

               {isShown 
               &&
               <Modal 
                    event={editEvent}
                    closeModal={closeModal}
                    categoryLabels={categoryLabels} 
                    saveEvent={saveEvent}
                    deleteEvent={deleteEvent}
                    
                /> }
               
                <ul className='timeline'>
                   {items}
                </ul>
            </div>
        </div>
    )
}