export const initialState = {
todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }],
};

export const reducer = (state, action) => {
    const newState = state + 1
    const newStateValue = reducer(initialState);
    console.log(initialState, newStateValue); 
    return newState;
  
}


