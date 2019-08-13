
import React, { useState, useReducer } from "react";
import {initalState, reducer} from "./reducer/reducer";
import TodosForm from "./TodosForm";


const Todo = () =>{
    const[newTodoText, setNewTodoText] = useState(initalState);
    const [state, dispatch] = useReducer(reducer, initalState);
    console.log(state)

    const handleChanges = e =>{
        setNewTodoText(e.target.value)
    };
    return (
        <div>
        <input
            className="title-input"
            type="text"
            item="newTodoText"
            completed="completed"
            id="new Date()"
            value={newTodoText}
            onChange={handleChanges}
          />
        </div>
    )
    }
export default Todo;