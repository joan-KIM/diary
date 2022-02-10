import React from "react";

export default function TimelineItem({title, place, category}) {
    return  <li className='timeline-item'>
                <div className='timeline-point'
                    style={{backgroundColor: category.color}} />
                <div className='event-wrapper'>
                    <span className='event-title'>{title}</span>
                    <span className='event-time'>13:30 - 14:30</span>
                </div>
                <p className='event-place'>{place}</p>
            </li>
}