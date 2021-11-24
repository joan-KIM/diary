import React from "react";
import Date from "./Date";
import TodoList from "./TodoList";
import Note from "./Note";

export default function Daily(){
    return (
        <div className='daily'>
            <div style={ {display:'flex', marginTop: '3em'} }>
                <Date />
                <TodoList />
            </div>

            <Note />
        </div>
    )
}