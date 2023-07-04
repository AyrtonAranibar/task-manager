import './TodoTasksContainer.css';

function TodoTasksContainer(props){
    return(

        <div className="tasks-list">
            {props.children}
        </div>

    );
}
export {TodoTasksContainer};