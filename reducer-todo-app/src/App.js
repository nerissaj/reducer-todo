import React from 'react'
import Todo from './components/Todo'
import {initalState, reducer} from './reducer/reducer';
import './App.css';
import TodosForm from "./components/TodosForm";
import ToggleCompleted from './components/ToggleCompleted';
import {useReducer} from 'react';

function App() {
  return (
    <div className="App">
    <h1> Todo App </h1>
    <TodosForm/>
       
    
    
       {/* {state.todos.map(todo => (
       <Todo
        key={todo.id}
        item={todo.item}
        completed={todo.completed}
        id={new Date()} />
       ))}
        */}
    
    <ToggleCompleted />
    </div>
  );
}

export default App;
