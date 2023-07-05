import React from "react";
import ReactDOM  from "react-dom";
import { TodoContext } from "../todoContext/todoContext";
import './modal.css'

function Modal( { children } ){
    const {setOpenModal, setRepeatedTask, setValidValue} = React.useContext(TodoContext);

    function closeModal(){
        setOpenModal(false);
        setRepeatedTask(false);
        setValidValue(false);
    }
        
    return ReactDOM.createPortal(
        <div onClick={ closeModal } className="modal">
            <div className="modal-card">
                <i className="fas fa-exclamation-triangle"></i>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };