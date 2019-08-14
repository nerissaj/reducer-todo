
import React, { useState, useReducer } from "react";
import {initalState, reducer} from "../reducer";
import TodosForm from "./TodosForm";
import ToggleCompleted from "./ToggleCompleted";


const Todo = () =>{
    const[newTodoText, setNewTodoText] = useState("");
    const [state, dispatch] = useReducer(reducer, initalState);
    console.log(state)

    const handleChanges = e =>{
        setNewTodoText(e.target.value)
    };
    return (
      
       
          <div>
                {state.todos.map(todo => (
                    <TodosForm
                     key={todo.id}
                     item={todo.item}
                     completed={todo.completed}
                     id={new Date()} />
                    ))}
                    <ToggleCompleted />
     </div>
        // <input
        //     className="title-input"
        //     type="text"
        //     item="newTodoText"
        //     completed="completed"
        //     id="new Date()"
        //     value={newTodoText}
        //     onChange={handleChanges}
        //   />
       
    )
    }
export default Todo;

