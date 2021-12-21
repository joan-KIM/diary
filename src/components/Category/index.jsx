import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import CategoryInputGroup from "./CategoryInputGroup";
import CategoryList from "./CategoryList";

export default function Category(){
    const [isShown, setIsShown] = useState(false);
    const [labels, setLabels] = useState([{'name':'Personal(default)'}, {'name':'Family'}, {'name':'Business'}]);

    const toggleHandler = (e) => {
        setIsShown(true);
    }

    const addNewCalendar = (text) => {
        setLabels([
            ...labels,
            {
                'name' : text
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

                { isShown && <CategoryInputGroup addNewCalendar={addNewCalendar} /> }
                
            </div>
        </div>
    )
}