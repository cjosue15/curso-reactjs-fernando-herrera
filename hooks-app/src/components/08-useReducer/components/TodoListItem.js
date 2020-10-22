import React from 'react';

export const TodoListItem = React.memo((props) => {
    console.log('Me renderizo');
    const { id, todo, done, handleRemove, handleDone, index } = props;
    return (
        <li className='list-group-item d-flex align-items-center justify-content-between mb-2'>
            <p className={`text-center mb-0 mr-3 ${done && 'complete'}`} onClick={() => handleDone(id)}>
                {index + 1}.- {todo}
            </p>
            <button className='btn btn-danger' onClick={() => handleRemove(id)}>
                Borrar
            </button>
        </li>
    );
});
