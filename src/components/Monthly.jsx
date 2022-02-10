import React, {useState} from "react";
import Category from "./Category";
import Calendar from "./Calendar";
import Modal from "./Modal";

export default function Monthly({date, changeHandler}) {
    const [isShown, setIsShown] = useState(false);

    const toggleHandler = (e) => {
      setIsShown(!isShown);
    }

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

    const updateLabels = (labels) => {
        setCategoryLabels(labels);
        console.log(categoryLabels);
    }

    return(
        <div className='monthly'>
            { isShown && <Modal toggleHandler={toggleHandler} categoryLabels={categoryLabels} /> }
            <Category initialLabels={initialLabels} updateLabels={updateLabels} />
            <Calendar date={date} changeHandler={changeHandler} toggleHandler={toggleHandler} />
        </div>
    )
}