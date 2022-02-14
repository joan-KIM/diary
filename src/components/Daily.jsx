import React, {useState, useEffect, useContext} from "react";
import Date from "./Date";
import TodoList from "./TodoList";
import Note from "./Note";
import { uuid } from "../utils/uuid";
import { today } from "../utils/date";
import { StoreContext } from "../store/Store";

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
