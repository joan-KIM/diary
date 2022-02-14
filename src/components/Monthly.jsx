import React from "react";
import Category from "./Category";
import Calendar from "./Calendar";
import CategoryStore from "../store/CategoryStore";

export default function Monthly({date, data, updateEvent, changeHandler}) {
    // const events = (data[date] && data[date].events) || [];
    // data에 해당 date가 있어야 events에 접근가능
    const events = (data[date]?.events) || [];      //optional chaining

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
        updateEvent(date, sortedEvents);
    }

    const deleteEvent = (id) => {
        const deletedEvents = events.filter(event => event.id !== id );
        updateEvent(date, deletedEvents)
    }

    return(
        <CategoryStore>
            <div className='monthly'>
                <Category />
                <Calendar 
                    date={date} 
                    data={data}
                    changeHandler={changeHandler} 
                    saveEvent={saveEvent}
                    events={events}
                    deleteEvent={deleteEvent}
                />
            </div>
        </CategoryStore>
       
    )
}

