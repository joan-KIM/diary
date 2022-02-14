import React, { useEffect, useState} from "react";
import Category from "./Category";
import Calendar from "./Calendar";

export default function Monthly({date, data, updateEvent, changeHandler}) {
    const initialLabels = [
        {
            'name':'Personal',
            'color':'#7367f0'
        },
        {
            'name':'Family',
            'color':'#28c76f'
        }, 
        {
            'name':'Business',
            'color': '#ff9f43'
        }
    ]

    const [categoryLabels, setCategoryLabels] = useState(initialLabels);

    // const events = (data[date] && data[date].events) || [];
    // data에 해당 date가 있어야 events에 접근가능
    const events = (data[date]?.events) || [];      //optional chaining

    const updateLabels = (labels) => {
        setCategoryLabels(labels);
    }
 
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
        <div className='monthly'>
            <Category initialLabels={initialLabels} updateLabels={updateLabels} />
            <Calendar 
                date={date} 
                data={data}
                changeHandler={changeHandler} 
                categoryLabels={categoryLabels}
                saveEvent={saveEvent}
                events={events}
                deleteEvent={deleteEvent}
            />
        </div>
    )
}

