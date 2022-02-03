import React from "react";
import classNames from "classnames";
import { today } from "../../utils/date";

// value => '22/1/24' 최상단 파일에서 date 전해줄 때 왼쪽과 같은 형태로 전달함
export default function Day({date, value, isPrev, isNext, selected, onClick}){
    return <td  
                className={classNames('circle-wrapper', {
                    'prev-month' : isPrev,
                    'next-month' : isNext,
                })}
                onClick={() => onClick(value)}    
            >
                <div className={classNames('circle', {
                    'today' : today() === value,
                    'selected' : selected === value
                })}>
                {date}
                </div>
            </td>;
}