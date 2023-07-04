import './TodoList.css';

function TodoList(props){
    return(
        <div className="todo-container">
            <form>
                {props.children}

            </form>
        </div>
    );
}
export {TodoList};