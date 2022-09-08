import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleFill } from 'react-icons/ri';
import { RiEditCircleFill } from 'react-icons/ri';


function Todo({ todos, complateTodo, removeTodo ,updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplate ? 'todo-row complate' : 'todo-row'}
            key={index}>

            <div key={todo.id} onClick={() => complateTodo(todo.id)}>
                {todo.text}
            </div>

            <div className='icons'>
                <RiCloseCircleFill
                    onClick={()=> removeTodo(todo.id)}
                    className='delete-icon' />

                <RiEditCircleFill
                    onClick={()=> setEdit({ id: todo.id, value: todo.tex })}
                    className='edit-icon' />


            </div>

        </div>
    ))
}

export default Todo;