import React, {useState} from "react";
import { toTimeLabel } from "../utils/time";
import Modal from "./Modal";

export default function TimelineItem({event, onClick}) {
    return  <li className='timeline-item' onClick={onClick} >
                <div className='timeline-point'
                    style={{backgroundColor: event.category.color}} />
                <div className='event-wrapper'>
                    <span className='event-title'>{event.title}</span>
                    <span className='event-time'>{toTimeLabel(event.startTime)} - {toTimeLabel(event.endTime)}</span>
                </div>
                <p className='event-place'>{event.place}</p>
            </li>
}