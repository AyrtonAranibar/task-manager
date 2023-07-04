

import './TodoNewItem.css';
import { TodoContext } from '../todoContext/todoContext';
import React from 'react';

function TodoNewItem( ){
    const { createTodo, todos } = React.useContext(TodoContext);

    function createTask(event){
        event.preventDefault();
        const inputElement = document.getElementById('task');
        const inputValue = inputElement.value;
        if(inputValue){
            if(todos.find(task => task.text === inputValue)){
                alert('Esa tarea ya existe');
            }else{
                createTodo(inputValue);
                inputElement.value = "";
            }
        }else{
            alert('Debes colocar un valor válido');
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