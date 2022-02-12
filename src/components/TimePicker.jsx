import React, { useEffect, useState } from "react";
import { MdUnfoldMore } from "react-icons/md";
import { toTimeValue, toTimeLabel } from "../utils/time";

// 시간 (01~24) 분 (00~60)
const HOUR_OPTION = Array.from({length: 24}, (_, i) => `${i < 10 ? '0' + i : i}`);
const MINUTE_OPTION = Array.from({length: 60}, (_, i) => `${i < 10 ? '0' + i : i}`);

// 옵션 선택 -> 선택된 값이 selectHour(), selectMinute()에 전달 -> setHour(값), setMinute(값)
function HourPicker({hour, selectHour}){
    return <select onChange={e => selectHour(e.target.value)} >
        {HOUR_OPTION.map(h => <option key={h} value={h} selected={hour===h} >{h}</option>)}
    </select>
}

function MinutePicker({minute, selectMinute}){
    return <select onChange={e => selectMinute(e.target.value)} >
        {MINUTE_OPTION.map(m => <option key={m} value={m} selected={minute===m} >{m}</option>)}
    </select>
}

// timeValue는 숫자형태의 값
export default function TimePicker({timeValue, selectTime}){
    const [initialHour, initialMinute] = toTimeLabel(timeValue).split(':');
    const [hour, setHour] = useState(initialHour);
    const [minute, setMinute] = useState(initialMinute);

    // selecTime <-- onChange
    // hour, minute 다 선택되면 00:00 형태로 전달
    useEffect(() => {
        if(hour && minute){
            console.log(hour, minute);
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
