import React, { useReducer, useEffect, useCallback } from 'react';
import useForm from '../../hooks/useForm';
import { TodoList } from './components/TodoList';
import './styles.css';
import { todoReducer } from './todoReducer';

// const initialState = [
//     {
//         id: new Date().getTime(),
//         todo: 'Aprender React',
//         done: false,
//     },
// ];

const init = () => {
    // return [
    //     {
    //         id: new Date().getTime(),
    //         todo: 'Aprender React',
    //         done: false,
    //     },
    // ];

    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ todo }, handleInputChange, reset] = useForm({ todo: '' });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (todo.trim().length <= 0) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            todo: todo,
            done: false,
        };

        const actionTodo = {
            type: 'add',
            payload: newTodo,
        };

        dispatch(actionTodo);
        reset();
    };

    // const handleRemove = (id) => {
    //     const actionTodo = {
    //         type: 'remove',
    //         payload: id,
    //     };
    //     dispatch(actionTodo);
    // };

    // const handleDone = (id) => {
    //     const actionTodo = {
    //         type: 'done',
    //         payload: id,
    //     };
    //     dispatch(actionTodo);
    // };

    const handleDone = useCallback(
        (id) => {
            const actionTodo = {
                type: 'done',
                payload: id,
            };
            dispatch(actionTodo);
        },
        [dispatch]
    );

    const handleRemove = useCallback(
        (id) => {
            const actionTodo = {
                type: 'remove',
                payload: id,
            };
            dispatch(actionTodo);
        },
        [dispatch]
    );

    return (
        <div>
            <div className='container mt-5'>
                <div className='row mx-0'>
                    <div className='col-md-12 mb-4'>
                        <h1 className='mb-0'>TodoApp ({todos.length})</h1>
                        <hr />
                    </div>
                </div>
                <div className='row mx-0'>
                    <div className='col-md-7'>
                        <TodoList todos={todos} handleRemove={handleRemove} handleDone={handleDone} />
                    </div>
                    <div className='col-md-5'>
                        <h4>Agregar Todo</h4>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='todo'
                                    placeholder='Nueva tarea'
                                    onChange={handleInputChange}
                                    value={todo}
                                    autoComplete='off'
                                    className='form-control'
                                />
                            </div>
                            <div className='content-buttons'>
                                <button type='submit' className='btn btn-info btn-block'>
                                    Agregar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
