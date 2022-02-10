import React, {useEffect, useState} from "react";
import Category from "./Category";
import Calendar from "./Calendar";
import Modal from "./Modal";

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
        setEvents([...events, event])
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
            />
        </div>
    )
}

