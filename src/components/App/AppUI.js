import React from 'react';
import { TodoCounter } from '../todoCounter/TodoCounter';
import { TodoSearch } from '../todoSearch/TodoSearch';
import { TodoList } from '../todoList/TodoList';
import { TodoItem } from '../todoItem/TodoItem';
// import { Button } from '../todoButton/TodoButton';
import { TodoNewItem } from '../todoNewItem/TodoNewItem';
import { TodoTasksContainer } from '../todoTasksContainer/TodoTasksContainer';
import { TodosError } from '../todosError/TodosError';
import { TodosLoading } from '../todosLoading/TodosLoading';
import { TodosEmpty } from '../todosEmpty/TodosEmpty';
import { TodoContext } from '../todoContext/todoContext';


function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    onCheck,
    deleteTodo
  } = React.useContext(TodoContext);

    return (
    <div className="App">
      <TodoNewItem
        // createTodo={createTodo}
        // todos={todos}
      />
      <TodoTasksContainer>
        <TodoSearch 
        // searchValue={searchValue} 
        // setSearchValue={setSearchValue} 
        />
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
        <TodoCounter 
          // total={totalTasks} 
          // completed={completedTasks}
        />
      </TodoTasksContainer>
    </div>
  );
}
export {AppUI};