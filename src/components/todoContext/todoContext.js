import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider( {children} ){
  const {
    item: todos, 
    saveItem: setTodos, 
    loading, 
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    const totalTasks = todos.length;
    const completedTasks = todos.filter(task => task.completed).length;
    setTotalTasks(totalTasks);
    setCompletedTasks(completedTasks);
  }, [todos]);

  const [totalTasks, setTotalTasks] = React.useState(0);
  const [completedTasks, setCompletedTasks] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  const [repeatedTask, setRepeatedTask] = React.useState(false);
  const [validValue, setValidValue] = React.useState(false);


  const searchedTodos = todos.filter((task) => {
    const tasktext = task.text;
    const taskLowerCase = tasktext.toLowerCase();
    const searchLowerCase = searchValue.toLowerCase();
    if (taskLowerCase.includes(searchLowerCase)) {
      return task.text;
    }
    return false;
  });

  function createTodo(text) {
    const newTodos = [...todos];
    newTodos.push({ 
      text: text, 
      completed:false
    })
    setTodos(newTodos);
  }

  function onCheck(text) {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  function deleteTodo(text) {
    const newTodos = todos.filter((todo) => todo.text !== text);
    setTodos(newTodos);
  }
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            createTodo,
            todos,
            searchValue,
            setSearchValue,
            searchedTodos,
            totalTasks,
            completedTasks,
            onCheck,
            deleteTodo,
            openModal,
            setOpenModal,
            repeatedTask, 
            setRepeatedTask,
            validValue, 
            setValidValue
        }}>
            {children}
        </TodoContext.Provider>
    );
}



export { TodoContext, TodoProvider };