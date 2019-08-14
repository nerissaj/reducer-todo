import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import Todo from "./Todo";


const TodosForm = ({add}) => {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    
  <form>
    <div className="AddTodo">
      
      <input value={text} onChange={e => setText(e.target.value)} className="AddTodoInput" />
      <button className="AddTodoButton" onClick={() => {add(text); setText("")}}>Add</button> 
      <button className="ClearCompleted" onClick={() => dispatch({type:'clearCompleted'})}>Clear Completed</button>
        </div> 
        add={text => dispatch({type: "add", text: text})} />
      
    </form>);
        }
export default TodosForm;




 

  
      
  