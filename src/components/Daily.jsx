import React, {useState} from "react";
import Date from "./Date";
import TodoList from "./TodoList";
import Note from "./Note";

export default function Daily(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tasks, setTasks] = useState([]);

    const changeHandler = (text) => {
        setTitle(text);
    }
    
    const typing = (text) => {
        setContent(text);
    }
    
    const createTask = (text) => {
        setTasks([
            ...tasks,
            {
                id: Date.now(),
                title: text,
                state: false
            }
        ]);
    }

    function removeTask(id){
        const todolist = tasks.filter(task => task.id !== id);
        setTasks(todolist);
    }

    function toggleHandler(id){
        const todolist = tasks.map(task => {
            if (task.id === id) {
              return {
                ...task,
                state: !task.state,
              }
            }
            return task;
          });

        setTasks(todolist);
    }

    return (
        <div className='daily'>
            <div style={ {display:'flex', marginTop: '3em'} }>
                <Date />
                <TodoList
                    tasks={tasks}
                    createTask={createTask}
                    removeTask={removeTask}
                    toggleHandler={toggleHandler}
                />
            </div>

            <Note 
                title={title}
                content={content}
                changeHandler={changeHandler}
                typing={typing}
            />
        </div>
    )
}

