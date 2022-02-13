import React from "react";
import { DAY_LIST } from "./constants";
import Day from "./Day";
import { toDate } from "../../utils/date";

export default function Week({data, isFirstWeek, sundayOfWeek, year, month, firstDay, lastDay, lastDate, selectedDate, onClick}){
    const days = DAY_LIST.map((_, day) => {
        let date = sundayOfWeek + day;
        const isPrev = isFirstWeek && firstDay > day;
        const isNext = !isFirstWeek && date > lastDate;     // !isFirstWeek :: isPrev와 중복을 막기 위함
        
        // 첫째주, 마지막 주
        if(isFirstWeek && !isPrev){
            date = 1 + day - firstDay;
        }
        if(isNext){
            date = day - lastDay;
        }

        const value = toDate(new Date(year, month + (isPrev ? -1 : 0) + (isNext ? 1 : 0), date));
        return <Day 
            events={data[value]?.events}
            date={date}
            value={value}
            isPrev={isPrev}
            isNext={isNext}
            selected={selectedDate}
            onClick={onClick}
            />
    })

    return <tr>{days}</tr>
}