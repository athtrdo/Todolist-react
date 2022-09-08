import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos,setTodos] =useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId? newValue: item)))
    }

    const complateTodo = id =>{
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplate = !todo.isComplate;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
  
    return (
    <div>
       <h1>TodoList</h1>
       <h3>What's a plan for today ?</h3>
       <TodoForm onSubmit={addTodo}/>
       <Todo todos = {todos} complateTodo = {complateTodo} removeTodo={removeTodo}
       updateTodo= {updateTodo}/>
    </div>
  );
}

export default TodoList;