import React from "react";
import Date from "./Date";
import TodoList from "./TodoList";
import Note from "./Note";
import { today } from "../utils/date";

export default function Daily(){
    return (
        <div className='daily'>
            <div style={ {display:'flex', height: '45%'} }>
                <Date  />
                <TodoList    />
            </div>

            <Note />
        </div>
    )
}

Daily.defaultProps = {
    selectedDate: today(),
    data: {
        tasks: [],
        note: {
            title:'',
            content:''
        },
        events: []
    }
}
