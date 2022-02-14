import React, { useState, useContext } from "react";
import { CategoryContext } from "../store/CategoryStore";
import {uuid} from "../utils/uuid";

const defaultEvent = {
    title:'',
    place:'',
    startTime:0,
    endTime:0,
}

export default function useEvent(initialEvent = defaultEvent, saveEvent, closeModal ) {
    const [title, setTitle] = useState(initialEvent.title );
    const [place, setPlace] = useState(initialEvent.place);

    const [startTime, setStartTime] = useState(initialEvent.startTime);
    const [endTime, setEndTime] = useState(initialEvent.endTime);

    const {labels} = useContext(CategoryContext);
    const [category, setCategory] = useState(initialEvent.category || labels[0] );

    const saveHandler = () => {
        closeModal();
        saveEvent({id: initialEvent.id || uuid(),
            title: title || '일정 제목 없음',
            place: place || '장소 없음', 
            category, startTime, endTime});
    }
  
    return{
        title,
        place,
        startTime,
        endTime,
        category,
        labels,
        saveHandler,
        settingTitle: setTitle,
        settingPlace: setPlace,
        selectCategory : setCategory,
        setStartTime,
        setEndTime
    }

}