import { useState } from 'react';

const useCounter = (inicialState = 10) => {
    const [state, setState] = useState(inicialState);

    const increment = (factor) => {
        setState(state + factor);
    };

    const decrement = (factor) => {
        setState(state - factor);
    };

    const reset = () => {
        setState(inicialState);
    };

    return { state, increment, decrement, reset };
};

export default useCounter;
