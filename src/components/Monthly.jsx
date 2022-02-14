import React, { useContext } from "react";
import Category from "./Category";
import Calendar from "./Calendar";
import CategoryStore from "../store/CategoryStore";
import { StoreContext } from "../store/Store";

export default function Monthly() {
    const {selectedDate, data, updateEvent} = useContext(StoreContext);

    // const events = (data[date] && data[date].events) || [];
    // data에 해당 date가 있어야 events에 접근가능
    const events = (data[selectedDate]?.events) || [];      //optional chaining

    const saveEvent = (event) => {
        let nextEvents = events;
        // 수정(같은 id를 갖고 있는 event가 있으면 대체)
        if(events.find(e => e.id === event.id)){
            nextEvents = events.map(e => {
                if(e.id === event.id){
                    return event;
                } else{
                    return e;
                }
            })
        }
        else{
            //추가
            nextEvents = [...events, event];
        }
        
        const sortedEvents = nextEvents.sort((a,b) => a.startTime - b.startTime);
        updateEvent(selectedDate, sortedEvents);
    }

    const deleteEvent = (id) => {
        const deletedEvents = events.filter(event => event.id !== id );
        updateEvent(selectedDate, deletedEvents)
    }

    return(
        <CategoryStore>
            <div className='monthly'>
                <Category />
                <Calendar 
                    saveEvent={saveEvent}
                    events={events}
                    deleteEvent={deleteEvent}
                />
            </div>
        </CategoryStore>
       
    )
}

