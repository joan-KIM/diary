import React from "react";
import {toDateObj, enMonth, toDate, today} from '../../utils/date';
import { DAY_LIST } from "./constants";
import Week from "./Week";

export default function DatePicker({selectedDate, changeHandler}){
    const dateObj = toDateObj(selectedDate);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();

    const startDay = new Date(year, month, 1).getDay();
    const endDay = new Date(year, month + 1, 0).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();

    const weekNum = (endDate > 28 ? 5 : 4) + (startDay > endDay ? 1 : 0);

    const weeks = Array.from({length: weekNum}, ((_, week) => {
        const isFirst = week === 0;
        const startDate = isFirst
            ? new Date(year, month, 0).getDate() - startDay + 1
            : 8 - startDay + (week - 1) * 7;
        return <Week
            startDate={startDate}
            isFirst={isFirst}
            startDay={startDay}
            endDay={endDay}
            endDate={endDate}
            year={year}
            month={month}
            selectedDate={selectedDate}
            onClick={changeHandler}
        />
    }));

    return (
        <>
            <div className='calendar-header'>
                <div>
                    <p className='month'>{enMonth(month)}</p>
                    <p className='year'>{year}</p>
                </div>
                <div className='button-group'>
                    <button className='prev-btn' onClick={() => changeHandler(toDate(new Date(year, month-1, dateObj.getDate())))}>
                    이전
                    </button>
                    <button className='today-btn' onClick={() => changeHandler(today())}>
                    오늘
                    </button>
                    <button className='next-btn' onClick={() => changeHandler(toDate(new Date(year, month+1, dateObj.getDate())))}>
                    다음
                    </button>
                </div>
            </div>

            <table className='calendar'>
                <tr className='row-day'>
                    {DAY_LIST.map(day => <td>{day}</td>)}
                </tr>
                {weeks}
            </table>
                {/* <input type='datetime-local' onChange={e => changeHandler(e.target.value)}></input> */}
        </>
    )
}