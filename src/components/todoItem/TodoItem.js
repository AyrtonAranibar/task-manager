import React from 'react';
import './TodoItem.css';

function TodoItem( props ){
    const number = Math.random();

    return(
    <div className='item-container'>
        <div>
            <input 
                type="checkbox" 
                id={number} 
                checked={ props.completed}
                onChange={props.onCheck}>
            </input>
        </div>
        <div>
            <label htmlFor={number} 
            className={ props.completed ? `completed task-text`:`task-text`}>{ props.text}</label></div>
        <div>
            <button 
            type="button" 
            onClick={props.deleteTodo}
            >
                <i className="fas fa-times"></i>
            </button>
        </div>
    </div>
    );
}

export {TodoItem};