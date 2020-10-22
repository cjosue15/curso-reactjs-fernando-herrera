export const todoReducer = (state = [], action) => {
    const { type, payload } = action;

    // switch (action.type) {
    //     case 'add':
    //         return [...state, action.payload];
    //     case 'remove':
    //         const todos = state.filter((todo) => todo.id !== action.payload.id);
    //         return todos;
    //     default:
    //         return state;
    // }

    switch (type) {
        case 'add':
            return [...state, payload];
        case 'remove':
            return state.filter((todo) => todo.id !== payload);
        // case 'done':
        //     const todo = state.find((todo) => todo.id === payload);
        //     todo.done = !todo.done;
        //     return [...state];
        case 'done':
            return state.map((item) => (item.id === payload ? { ...item, done: !item.done } : item));
        default:
            return state;
    }
};
