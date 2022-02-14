import React, { useContext, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import classNames from "classnames";
import TimePicker from "./TimePicker";
import { uuid } from "../utils/uuid";
import { CategoryContext } from "../store/CategoryStore";
import useEvent from "../hook/useEvent";

export default function Modal({event, closeModal , saveEvent, deleteEvent}){
    const {
        title,
        place,
        startTime,
        endTime,
        category,
        labels,
        saveHandler,
        settingTitle,
        settingPlace,
        selectCategory,
        setStartTime,
        setEndTime
    } = useEvent(event, saveEvent, closeModal);

    const categoryList = labels.map( label => {
        return      <input
                        type="radio"
                        name="label"
                        checked={category.color === label.color}        // 리액트는 데이터 기반.. 선택되었다면 '선택됨' 정보 갖고 있어야함
                        className="event-category" 
                        onClick={e => selectCategory(label)}
                        style={{backgroundColor: label.color}}
                    />             
    })

    return (
        <div className="modal-background" onClick={e => e.target.closest('.modal') || closeModal()} >
            <div className="modal">
                <div className="modal-header">
                    { event ? 'Edit Event' : 'Add Event'}
                    { event && <MdOutlineDelete className="delete-event-btn" onClick={() => deleteEvent(event.id) || closeModal()} /> }
                </div>

                <form className="md-input-wrapper">
                    <div className="event-input-group">
                        <label for="event-title">Title</label>
                        <div className="event-inputbox-wrapper">
                            <input type="text" id="event-title" value={title} onChange={e => settingTitle(e.target.value)} ></input>
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
                            <input type="text" id="event-place" value={place} onChange={e => settingPlace(e.target.value)} ></input>
                        </div>
                    </div>

                    <div className="event-input-group">
                        <label for="event-category">Calendar</label>
                        <div className={classNames("event-inputbox-wrapper", "select-category")} >
                            {categoryList}
                        </div>
                    </div>
                </form>

                <div className="modal-footer">
                    <button className="close-modal" onClick={closeModal}>Cancel</button>
                    <button className="save-event-btn" onClick={saveHandler} >Save</button>
                </div>
            </div>
        </div>
    )
}