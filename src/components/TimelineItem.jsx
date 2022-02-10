import React from "react";
import { toTimeLabel } from "../utils/time";

export default function TimelineItem({title, place, category, startTime, endTime}) {
    return  <li className='timeline-item'>
                <div className='timeline-point'
                    style={{backgroundColor: category.color}} />
                <div className='event-wrapper'>
                    <span className='event-title'>{title}</span>
                    <span className='event-time'>{toTimeLabel(startTime)} - {toTimeLabel(endTime)}</span>
                </div>
                <p className='event-place'>{place}</p>
            </li>
}