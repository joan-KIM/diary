import React from 'react';
import Day from './Day';
import { DAY_LIST } from './constants';
import { toDate } from '../../utils/date';

export default function Week({startDate, startDay, endDate, endDay, isFirst, year, month, selectedDate, onClick}) {
  const days = DAY_LIST.map((_, day) => {
    let date = startDate + day;
    const isPrev = isFirst && day < startDay;
    const isNext = !isFirst && date > endDate;
    if (isFirst && !isPrev) {
      date = 1 + day - startDay;
    }
    if (isNext) {
      date = day - endDay;
    }

    const value = toDate(new Date(year, month + (isNext ? 1 : 0) + (isPrev ? -1 : 0), date));
    return <Day date={date} value={value} selectedDate={selectedDate} onClick={onClick} isPrev={isPrev} isNext={isNext} />
  });

  return <tr>{days}</tr>
}
