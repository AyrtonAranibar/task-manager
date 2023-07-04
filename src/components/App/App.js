import React from 'react';

import './App.css';
import { AppUI } from './AppUI';
import { TodoProvider } from '../todoContext/todoContext';
// import { AtomIcon1 } from './icons/components/AtomIcon1';

function App() {

  return(
    <TodoProvider>
      <AppUI
      // loading={loading}
      // error={error}
      // createTodo={createTodo}
      // todos={todos}
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      // searchedTodos={searchedTodos}
      // totalTasks={totalTasks}
      // completedTasks={completedTasks}
      // onCheck={onCheck}
      // deleteTodo={deleteTodo}
      />
    </TodoProvider>
    
  );
}

export default App;
