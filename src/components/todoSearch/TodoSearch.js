import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../todoContext/todoContext';

function TodoSearch(){
    
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    function searchTask( event ){
        setSearchValue(event.target.value);
    }

    return(
        <div className="search-input">
            <form>
                <input type="text" 
                id="search-task" 
                value={searchValue}
                onChange={searchTask}
                placeholder="Search a task..."></input>

            </form>
        </div>
    );
}

export { TodoSearch };