import React, { useState, useContext } from "react";
import { MdAdd } from "react-icons/md";
import { pickColor } from "../../utils/color";
import { CategoryContext } from "../../store/CategoryStore";
import CategoryInputGroup from "./CategoryInputGroup";
import CategoryList from "./CategoryList";

export default function Category(){
    const [isShown, setIsShown] = useState(false);
    const {labels, addNewLabel} = useContext(CategoryContext);

    const toggleHandler = (e) => {
        if(labels.length == 6) {
            return;
        }else{
            setIsShown(true);
        }
    }

    const addNewCalendar = (text) => {
        addNewLabel();
        setIsShown(false);
    }

    return (
        <div className='category-section' >
            <div className='category-wrapper' >
                <div className='category-header' >
                    <p style={{margin: '0'}}>CALENDARS</p>
                    { labels.length < 6 && <MdAdd className='show-inputgroup-btn' onClick={e => toggleHandler(e)} /> }
                </div>

                <CategoryList />

                { isShown && <CategoryInputGroup addNewCalendar={addNewCalendar} bulletColor={pickColor(labels)} /> }
                
            </div>
        </div>
    )
}