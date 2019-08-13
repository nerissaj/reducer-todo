import React from 'react';

function ToggleCompleted(){
    return (
<ul>
  {todos.map(todo =>
    <li key={todo.id}
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
    </li>
  )}
</ul>
    );
}
export default ToggleCompleted;