import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { pickColor } from "../../utils/color";
import CategoryInputGroup from "./CategoryInputGroup";
import CategoryList from "./CategoryList";

export default function Category(){
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
    const [labels, setLabels] = useState(initialLabels);

    const toggleHandler = (e) => {
        setIsShown(true);
    }

    const addNewCalendar = (text) => {
        setLabels([
            ...labels,
            {
                'name' : text,
                'color' : pickColor(labels)
            }
        ]);
        setIsShown(false);
    }

    return (
        <div className='category-section' >
            <div className='category-wrapper' >
                <div className='category-header' >
                    <p style={{margin: '0'}}>CALENDARS</p>
                    <MdAdd className='show-inputgroup-btn' onClick={e => toggleHandler(e)} />
                </div>

                <CategoryList labels={labels} />

                { isShown && <CategoryInputGroup addNewCalendar={addNewCalendar} bulletColor={pickColor(labels)} /> }
                
            </div>
        </div>
    )
}