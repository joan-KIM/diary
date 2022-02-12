import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import classNames from "classnames";
import TimePicker from "./TimePicker";
import { uuid } from "../utils/uuid";

export default function Modal({event, categoryLabels, closeModal , saveEvent, deleteEvent}){
    // 등록된 이벤트가 있을 경우(일정 수정할 때) event 존재유무 확인후 초기값 설정
    const [title, setTitle] = useState(event ? event.title : '');
    const [place, setPlace] = useState(event ? event.place : '');
    // 옵션 모두 선택 후, selectTime으로 넘어온 (00:00 형태의 값)을 전달 받아서 시작시간, 종료시간 저장
    const [startTime, setStartTime] = useState(event ? event.startTime : '');
    const [endTime, setEndTime] = useState(event ? event.endTime : '');
    const [category, setCategory] = useState(event ? event.category : '');

    const labels = categoryLabels.map( label => {
        return      <input
                        type="radio"
                        name="label"
                        className="event-category" 
                        onClick={e => selectCategory(label)}
                        style={{backgroundColor: label.color}}
                    />             
    })

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
        closeModal();
        saveEvent({id: event ? event.id : uuid(), title, place, category, startTime, endTime});
    }

  
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
                            {labels}
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