import React from "react";
import { TodoContext } from "../todoContext/todoContext";
import './modalButton.css'

function ModalButton(){
    const { setOpenModal } = React.useContext(TodoContext);
    return(
        <button onClick={()=>{setOpenModal(true)}} className="modal-button">
            Click Here!
        </button>
    );
}

export { ModalButton };