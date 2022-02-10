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

    const [isShown, setIsShown] = useState(false);
    const [categoryLabels, setCategoryLabels] = useState(initialLabels);

    const [events, setEvents] = useState([]);
    
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [category, setCategory] = useState('');

    const settingTitle = (value) => {
        setTitle(value);
    }

    const settingPlace = (value) => {
        setPlace(value);
    }

    const selectCategory = (value) => {
        setCategory(value);
    }

    const toggleHandler = (e) => {
      setIsShown(!isShown);
    }

    const updateLabels = (labels) => {
        setCategoryLabels(labels);
        console.log(categoryLabels);
    }

    const saveEvent = () => {
        setEvents([
            ...events,
            {
                title: title,
                place: place,
                category: category
            }
        ])

        setIsShown(!isShown);
    }

    console.log(events);

    return(
        <div className='monthly'>
            { isShown 
            && 
            <Modal 
                toggleHandler={toggleHandler} 
                categoryLabels={categoryLabels} 
                settingPlace={settingPlace}
                settingTitle={settingTitle}
                selectCategory={selectCategory}
                saveEvent={saveEvent}
            /> 
            }
            <Category initialLabels={initialLabels} updateLabels={updateLabels} />
            <Calendar 
                date={date} 
                changeHandler={changeHandler} 
                toggleHandler={toggleHandler} 
                events={events}
            />
        </div>
    )
}

