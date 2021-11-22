import React from "react";
import reactDom from "react-dom";
import Date from "./Date";
import TodoListContainer from "./TodoListContainer";

export default function Daily(){
    return (
        <div className='daily'>
            <div style={ {display:'flex', marginTop: '3em'} }>
                <Date />
                <div className='todolist-wrapper'>
                    <p className='todolist-header'>To do List</p>
                    <TodoListContainer />
                </div>
            </div>
        </div>
    )
}