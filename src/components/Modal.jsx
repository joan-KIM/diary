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
                    


                </form>
            </div>
        </div>
    )
}