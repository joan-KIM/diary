import React from "react";
import { toTimeLabel } from "../utils/time";
import {MdOutlinePlace} from "react-icons/md";

export default function TimelineItem({event, onClick}) {
    return  <li className='timeline-item' onClick={onClick} >
                <div className='timeline-point-wrapper'
                        style={{backgroundColor: `${event.category.color}1f`}}  >
                    <div className='timeline-point'
                        style={{backgroundColor: event.category.color}} />
                </div>
                <div className='event-wrapper'>
                    <span className='event-title'>{event.title}</span>
                    <span className='event-time'>{toTimeLabel(event.startTime)} - {toTimeLabel(event.endTime)}</span>
                </div>
                <div style={{ display:'flex'}}>
                    <MdOutlinePlace className='place-icon' />
                    <p className='event-place'>{event.place}</p>
                </div>
            </li>
}