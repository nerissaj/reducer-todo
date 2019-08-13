import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer/reducer";
import Todo from "./Todo";


const TodosForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
  <form>
      <input value={text} onChange={e => setText(e.target.value)} className="AddTodoInput" />
      <button className="AddTodoButton" onClick={() => {add(text); setText("")}}>Add</button> 
      <button  className="ClearCompleted" onClick={() =>{handleclearCompleted(text); setText("")}}>Clear Completed</button>
      
   
        {state.todos.map(todo => (
      <Todo
        key={todo.id}
        item={todo.item}
        completed={todo.completed}
        add={text => dispatch({type: "add", text: text})}
        
        />
        ))}
        
    </form>);
        }
export default TodosForm;