import React from "react";
import Week from "./Week";
import {toDateObj, enMonth, toDate, today} from '../../utils/date';
import { DAY_LIST } from "./constants";

export default function DatePicker({selectedDate, changeHandler}){
    const dateObj = toDateObj(selectedDate);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();

    // 선택된 날짜가 포함된 달의 첫째 날(의 요일), 마지막 날(의 요일), 마지막 날짜
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month+1, 0).getDay();
    const lastDate = new Date(year, month+1, 0).getDate();

    const weekNum = (lastDate > 28 ? 5 : 4) + (lastDay < firstDay ? 1 : 0);

    // Array.from(유사배열객체(length 속성 가짐), 반복가능한 객체)
    const weeks = Array.from({length : weekNum}, (_, week) => {
        const isFirstWeek = week === 0;
        // 첫째 주에 이전 달 날짜가 포함된 경우, 아닌 경우
        const sundayOfWeek = isFirstWeek 
            ? new Date(year, month, 0).getDate() - firstDay + 1
            : 1 + (7 - firstDay) + 7 * (week - 1);
        
        return <Week 
            isFirstWeek={isFirstWeek}
            sundayOfWeek={sundayOfWeek}
            firstDay={firstDay}
            lastDay={lastDay}
            lastDate={lastDate}
            year={year}
            month={month}
            selectedDate={selectedDate}
            onClick={changeHandler}
            />
    })


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
        </>
    )
}