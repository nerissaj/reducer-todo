import React from 'react';

import './App.css';
import TodosForm from "./TodosForm";
import ToggleCompleted from './ToggleCompleted';

function App() {
  return (
    <div className="App">
       <h1> Todo App </h1>
    <TodosForm />
    <ToggleCompleted />
    </div>
  );
}

export default App;
