import React from "react";
import { MdOutlineDelete, MdUnfoldMore } from "react-icons/md";
import classNames from "classnames";

export default function Modal(){
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
                            <input type="text" id="event-title"></input>
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
                            <input type="text" id="event-place"></input>
                        </div>
                    </div>

                    <div className="event-input-group">
                        <label for="event-category">Calendar</label>
                        <div className={classNames("event-inputbox-wrapper", "select-category")} >
                            <div className="event-category" />
                            <div className="event-category" />
                            <div className="event-category" />
                            <div className="event-category" />
                            <div className="event-category" />
                        </div>
                    </div>
                </form>

                <div className="modal-footer">
                    <button className="close-modal">Cancle</button>
                    <button className="save-event-btn">Save</button>
                </div>
            </div>
        </div>
    )
}