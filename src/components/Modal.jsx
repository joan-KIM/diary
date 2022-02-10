import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import classNames from "classnames";
import TimePicker from "./TimePicker";
import { toTimeLabel } from "../utils/time";

export default function Modal({categoryLabels, closeModal , saveEvent}){
    const labels = categoryLabels.map( label => {
        return <div 
                    className="event-category" 
                    onClick={e => selectCategory(label)}
                    style={{backgroundColor: label.color}}
                />
    })

    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
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

    const saveHandler = () => {
        saveEvent({title, place, category, startTime, endTime});
        closeModal();
    }

  
    return (
        <div className="modal-background">
            <div className="modal">
                <div className="modal-header">
                    Add Event
                    <MdOutlineDelete className="delete-event-btn" />
                </div>

                <form className="md-input-wrapper">
                    <div className="event-input-group">
                        <label for="event-title">Title</label>
                        <div className="event-inputbox-wrapper">
                            <input type="text" id="event-title" onChange={e => settingTitle(e.target.value)} ></input>
                        </div>
                    </div>

                    <div className="event-input-group">
                        <label for="event-time">Time</label>
                        <div className="timepicker-group">
                            <TimePicker timeValue={startTime} selectTime={setStartTime} />
                            <span>~</span>
                            <TimePicker  timeValue={endTime} selectTime={setEndTime} />
                        </div>
                    </div>

                    <div className="event-input-group">
                        <label for="event-place">Place</label>
                        <div className="event-inputbox-wrapper">
                            <input type="text" id="event-place" onChange={e => settingPlace(e.target.value)} ></input>
                        </div>
                    </div>

                    <div className="event-input-group">
                        <label for="event-category">Calendar</label>
                        <div className={classNames("event-inputbox-wrapper", "select-category")} >
                            {labels}
                        </div>
                    </div>
                </form>

                <div className="modal-footer">
                    <button className="close-modal" onClick={e => closeModal(e)}>Cancle</button>
                    <button className="save-event-btn" onClick={saveHandler} >Save</button>
                </div>
            </div>
        </div>
    )
}