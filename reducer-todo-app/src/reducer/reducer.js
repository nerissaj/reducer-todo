 
 import React from 'react';
 export const initialState = {
todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn Redux',
    completed:false,
    id:3892987895
  }
],
};



export const reducer = (state, action) => {
  switch (action.type){ 
    case "newTodo":
      {
        const newTodo={
          item:'action.text',
      completed:false,
          id: new Date(),

        };
        return {
          todos:[...state.todos,newTodo],
        }
      }
  }
    // const newState = state + 1
    // const newStateValue = reducer(initialState);
    // console.log(initialState, newStateValue); 
    // return newState;
  
}


