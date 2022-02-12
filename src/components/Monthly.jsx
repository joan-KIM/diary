import React, { useEffect, useState} from "react";
import Category from "./Category";
import Calendar from "./Calendar";

export default function Monthly({date, data, update, changeHandler}) {
    // console.log(data.events);
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
    // const [events, setEvents] = useState(data.events);

    const updateLabels = (labels) => {
        setCategoryLabels(labels);
    }

    // useEffect(() => {
    //     setEvents(data.events);
    //     update(date, data.tasks, data.note, events);
    // }, [date]);
 
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
        setEvents(sortedEvents);
    }

    const deleteEvent = (id) => {
        const deletedEvents = events.filter(event => event.id !== id );
        setEvents(deletedEvents);
    }

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

