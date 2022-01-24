import React from 'react';
import classNames from 'classnames';
import { today } from '../../utils/date';

export default function Day({date, value, isNext, isPrev, selectedDate, event, onClick}) {
  return <td
      className={classNames({
          'prev-month': isPrev,
          'next-month': isNext,
          'today': today() === value,
          'selected': selectedDate === value,
      })}
      onClick={() => onClick(value)}
  >
      {date}
      {/* {event && <Circle color={event.color} />} */}
  </td>
}
