import React from "react";
import { MdOutlineDelete } from "react-icons/md";

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
                        <div>
                            <input type="text" id="event-title"></input>
                        </div>
                    </div>

                    <div className="event-input-group">
                        <label for="event-time">Time</label>
                        <div>
                            <input type="text" id="event-time"></input>
                        </div>
                    </div>

                    <div className="event-input-group">
                        <label for="event-place">Place</label>
                        <div>
                            <input type="text" id="event-place"></input>
                        </div>
                    </div>

                    <div className="event-input-group">
                        <label for="event-category">Calendar</label>
                        <div>
                            <input type="text" id="event-category"></input>
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