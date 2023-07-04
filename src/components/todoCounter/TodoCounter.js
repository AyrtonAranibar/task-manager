import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../todoContext/todoContext';


function TodoCounter() {

  const { totalTasks, completedTasks} = React.useContext(TodoContext);

  let message = "";
  if (totalTasks > 0){
    (totalTasks === completedTasks)
    ?message = '¡Muy bien! Haz completado todas las tareas'
    :message = `Has completado ${ completedTasks } de ${ totalTasks } tareas`;
  }


  return (
    <div className='completed-tasks'>
      <h1>
          {message}
      </h1>
    </div>
  );
}

export { TodoCounter };