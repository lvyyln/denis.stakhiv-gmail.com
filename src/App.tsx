import React from 'react';
import './App.css';
import TodoForm from "./components/todo-form/todo-form";
import TodoList from "./components/todo-list/todo-list";

function App() {
    return (
        <div className="App">
            <TodoForm></TodoForm>
            <TodoList></TodoList>
        </div>
    );
}

export default App;
