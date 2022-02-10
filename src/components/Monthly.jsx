import React, {useEffect, useState} from "react";
import Category from "./Category";
import Calendar from "./Calendar";
import Modal from "./Modal";
import { MdEdit } from "react-icons/md";

export default function Monthly({date, changeHandler}) {
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

    const [events, setEvents] = useState([]);
 
    const updateLabels = (labels) => {
        setCategoryLabels(labels);
        console.log(categoryLabels);
    }

    const saveEvent = (event) => {
        let nextEvents = events;
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
        setEvents(sortedEvents);
        
    }

    const deleteEvent = (id) => {
        const deletedEvents = events.filter(event => event.id !== id );
        setEvents(deletedEvents);
    }

    console.log(events);

    return(
        <div className='monthly'>
            <Category initialLabels={initialLabels} updateLabels={updateLabels} />
            <Calendar 
                date={date} 
                changeHandler={changeHandler} 
                categoryLabels={categoryLabels}
                saveEvent={saveEvent}
                events={events}
                deleteEvent={deleteEvent}
            />
        </div>
    )
}

