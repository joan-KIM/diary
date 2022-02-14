import React, { useContext } from "react";
import classNames from "classnames";
import { today } from "../../utils/date";
import { StoreContext } from "../../store/Store";

// value => '22/1/24' 최상단 파일에서 date 전해줄 때 왼쪽과 같은 형태로 전달함
export default function Day({events, date, value, isPrev, isNext}){   
    const {selectedDate, changeHandler} = useContext(StoreContext); 

    return <td  
                className={classNames('circle-wrapper', {
                    'prev-month' : isPrev,
                    'next-month' : isNext,
                })}
                onClick={() => changeHandler(value)}    
            >
                <div className={classNames('circle', {
                    [`category-color-${events?.[0]?.category.color.slice(1)}`] : events?.length > 0,
                    'today' : today() === value,
                    'selected' : selectedDate === value,
                })}
                >
                {date}
                </div>
            </td>;
}
