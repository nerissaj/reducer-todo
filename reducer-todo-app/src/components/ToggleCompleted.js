import React from 'react';
import Todo from './Todo';
import {initialState, reducer} from "../reducer/reducer"

const  ToggleCompleted = (toggle = [],actio)=>{
switch (action.type){
  case 'TOGGLE_TODO'
}
    return (
      ...toggle
<div>
  {todos.map(todo =>
    <todos key={todo.id}
        onClick={() => {
          dispatch({
            type: 'TOGGLE_TODO',
            id: todo.id
          });
        }}
        style={{
          textDecoration:
            todo.completed ?
              'line-through' :
              'none'
        }}>
      {todo.text}
 
  )}

    

export default ToggleCompleted;
