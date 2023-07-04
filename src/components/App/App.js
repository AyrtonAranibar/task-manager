import React from 'react';

import './App.css';
import { AppUI } from './AppUI';
import { TodoProvider } from '../todoContext/todoContext';


function App() {

  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  );
}

export default App;
