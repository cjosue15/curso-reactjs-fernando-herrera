import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = React.memo(({ todos, handleRemove, handleDone }) => {
    return (
        <ul className='list-group list-group-flush'>
            {todos &&
                todos.map((item, index) => (
                    <TodoListItem
                        key={item.id}
                        {...item}
                        index={index}
                        handleRemove={handleRemove}
                        handleDone={handleDone}
                    />
                ))}
        </ul>
    );
});
