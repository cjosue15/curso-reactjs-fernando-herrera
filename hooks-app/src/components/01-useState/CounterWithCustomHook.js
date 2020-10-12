import React from 'react';
import useCounter from '../../hooks/useCounter';
import './Counter.css';

const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />
            <button className='btn btn-primary mr-2' onClick={() => increment(1)}>
                {/* <button className='btn btn-primary mr-2' onClick={() => {increment()}}> */}
                +1
            </button>
            <button className='btn btn-info mr-2' onClick={reset}>
                RESET
            </button>
            <button className='btn btn-secondary' onClick={() => decrement(2)}>
                -1
            </button>
        </>
    );
};

export default CounterWithCustomHook;
