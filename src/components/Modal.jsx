import React, { useState } from "react";
import { MdOutlineDelete, MdUnfoldMore } from "react-icons/md";
import classNames from "classnames";

export default function Modal({toggleHandler, categoryLabels, settingPlace, settingTitle, selectCategory, saveEvent}){
    const labels = categoryLabels.map( label => {
        return <div 
                    className="event-category" 
                    onClick={e => selectCategory(label)}
                    style={{backgroundColor: label.color}}
                />
    })

  
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
                            <div className="timepicker-wrapper">
                                <input value="00"/>
                                <MdUnfoldMore className="time-select-btn" />
                                <input value="00"/>
                                <MdUnfoldMore className="time-select-btn" />
                            </div>
                            <span>~</span>
                            <div className="timepicker-wrapper">
                                <input value="00" />
                                <MdUnfoldMore className="time-select-btn" />
                                <input value="00" />
                                <MdUnfoldMore className="time-select-btn" />
                            </div>
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
                    <button className="close-modal" onClick={e => toggleHandler(e)}>Cancle</button>
                    <button className="save-event-btn" onClick={saveEvent} >Save</button>
                </div>
            </div>
        </div>
    )
}