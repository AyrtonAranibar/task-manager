

import './TodoNewItem.css';
import { TodoContext } from '../todoContext/todoContext';
import React from 'react';

function TodoNewItem( ){
    const { loading, createTodo, todos, setOpenModal, setRepeatedTask, setValidValue } = React.useContext(TodoContext);

    function createTask(event){
        event.preventDefault();
        if(!loading){
            const inputElement = document.getElementById('task');
            const inputValue = inputElement.value;
            if(inputValue){
                if(todos.find(task => task.text === inputValue)){
                    setRepeatedTask(true);
                    setOpenModal(true);
                }else{
                    createTodo(inputValue);
                    inputElement.value = "";
                }
            }else{
                setValidValue(true);
                setOpenModal(true);
            }
        }
    }
    return(
        <div className="create-task">
            <form onSubmit={ createTask }>
                <label htmlFor="task">Enter a new task:
                </label>
                <div className="input-form">
                    <input type="text" id="task" required></input>
                    <span>Task name</span>
                </div>
                <button type="button" onClick={ createTask }>Create Task</button>
            </form>
            <div>
                <img src="working.svg" alt="working"></img>
            </div>
        </div>

    );
}
export {TodoNewItem};