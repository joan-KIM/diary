import React from "react";
import DatePicker from "./DatePicker";

export default function Calendar({date, changeHandler}){
    return (
        <div className='calendar-section' >
            <div className='calendar-container'>
               <DatePicker selectedDate={date} changeHandler={changeHandler}></DatePicker>

               <button className='add-event-btn'>Add Event</button>
               
               <ul className='timeline'>
                    <li className='timeline-item'>
                        <div className='timeline-point'></div>
                        <div className='event-wrapper'>
                            <span className='event-title'>치과 정기검진</span>
                            <span className='event-time'>13:30 - 14:30</span>
                        </div>
                        <p className='event-place'>아름다운 이치과의원</p>
                    </li>
                    <li className='timeline-item'>
                        <div className='timeline-point'></div>
                        <div className='event-wrapper'>
                            <span className='event-title'>아르바이트</span>
                            <span className='event-time'>17:00 - 22:00</span>
                        </div>
                        <p className='event-place'>하삼동커피 기장떙땡점</p>
                    </li>
                    <li className='timeline-item'>
                        <div className='timeline-point'></div>
                        <div className='event-wrapper'>
                            <span className='event-title'>아르바이트</span>
                            <span className='event-time'>17:00 - 22:00</span>
                        </div>
                        <p className='event-place'>하삼동커피 기장떙땡점</p>
                    </li>
               </ul>
            </div>
        </div>
    )
}