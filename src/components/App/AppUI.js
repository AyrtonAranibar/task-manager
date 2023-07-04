import React from 'react';
import { TodoCounter } from '../todoCounter/TodoCounter';
import { TodoSearch } from '../todoSearch/TodoSearch';
import { TodoList } from '../todoList/TodoList';
import { TodoItem } from '../todoItem/TodoItem';
import { TodoNewItem } from '../todoNewItem/TodoNewItem';
import { TodoTasksContainer } from '../todoTasksContainer/TodoTasksContainer';
import { TodosError } from '../todosError/TodosError';
import { TodosLoading } from '../todosLoading/TodosLoading';
import { TodosEmpty } from '../todosEmpty/TodosEmpty';
import { TodoContext } from '../todoContext/todoContext';
import { Modal } from '../modal/modal';

function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    onCheck,
    deleteTodo,
    openModal,
    repeatedTask,
    validValue
  } = React.useContext(TodoContext);

    return (
    <div className="App">
      <TodoNewItem/>
      <TodoTasksContainer>
        <TodoSearch/>
        <TodoList>
          {loading && <TodosLoading/>}
          {error && <TodosError/>}
          {!loading && searchedTodos.length === 0 && <TodosEmpty/>}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onCheck={ ()=>onCheck(todo.text) }
              deleteTodo={ ()=>deleteTodo(todo.text) }
            />
          ))}
        </TodoList>
        <TodoCounter/>
        {openModal && (
        <Modal>
          <h2> ¡Advertencia!</h2>
          {repeatedTask && <p> Tarea repetida</p>}
          {validValue && <p> Coloca un valor válido</p>}
        </Modal>)}
        
      </TodoTasksContainer>
    </div>
  );
}
export {AppUI};