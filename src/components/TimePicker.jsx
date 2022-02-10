import React, { useEffect, useState } from "react";
import { MdUnfoldMore } from "react-icons/md";
import { toTimeValue, toTimeLabel } from "../utils/time";

const HOUR_OPTION = Array.from({length: 24}, (_, i) => `${i < 10 ? '0' + i : i}`);
const MINUTE_OPTION = Array.from({length: 60}, (_, i) => `${i < 10 ? '0' + i : i}`);

function HourPicker(hour, selectHour){
    return <select onChnage={e => selectHour(e.target.value)} >
        {HOUR_OPTION.map(h => <option key={h} value={h} select={hour===h} >{h}</option>)}
    </select>
}

function MinutePicker(minute, selectMinute){
    return <select onChnage={e => selectMinute(e.target.value)} >
        {MINUTE_OPTION.map(m => <option key={m} value={m} select={minute===m} >{m}</option>)}
    </select>
}

export default function TimePicker({timeValue, selectTime}){
    const [initialHour, initialMinute] = toTimeLabel(timeValue).split(':');
    const [hour, setHour] = useState(initialHour);
    const [minute, setMinute] = useState(initialMinute);

    // selecTime <-- onChange
    useEffect(() => {
        if(hour && minute){
            selectTime(toTimeValue(`${hour}:${minute}`));
        }
    }, [hour, minute, selectTime])

    return  <div className="timepicker-wrapper">
                <HourPicker hour={hour} selectHour={setHour} />
                <MdUnfoldMore className="time-select-btn" />
                <MinutePicker minute={minute} selectMinute={setMinute} />
                <MdUnfoldMore className="time-select-btn" />
            </div>
            
}
