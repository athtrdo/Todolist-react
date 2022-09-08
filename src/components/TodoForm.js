import React, { useEffect, useRef, useState } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');
    
    const handleChange = e => {
        setInput(e.target.value);
    };

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    
   

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <div>
                    <input
                        placeholder='Update your plan'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className='todo-input edit'
                    />
                    <button onClick={handleSubmit} className='todo-button edit'>Update
                    </button>
                </div>
            ) : (
                <div >
                    <input
                        type='text'
                        placeholder='Add a todo'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button'>Add Plan</button>
                </div>
            )}
        </form>

    );
};

export default TodoForm