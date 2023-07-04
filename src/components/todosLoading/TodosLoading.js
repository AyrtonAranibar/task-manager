import React from "react";
import "./TodosLoading.css";

function TodosLoading(){
    return(
        <>
            <div className="loading-skeleton">
                <div></div><div></div>
            </div>
            <div className="loading-skeleton">
                <div></div><div></div>
            </div>
            <div className="loading-skeleton">
                <div></div><div></div>
            </div>
        </>
    );
}
export {TodosLoading};