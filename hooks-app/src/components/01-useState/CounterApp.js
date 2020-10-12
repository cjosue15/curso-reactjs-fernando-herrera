import React, { useState } from 'react';
import './Counter.css';

const CounterApp = () => {
    const [state, setSatate] = useState({ counter1: 10, counter2: 20, counter3: 30, counter4: 40, counter5: 50 });

    const { counter1, counter2 } = state;

    return (
        <div>
            <h1>Counter App</h1>
            <h2>Counter 1 - {counter1}</h2>
            <h2>Counter 2 - {counter2}</h2>
            <hr />
            <button
                className='btn btn-primary'
                onClick={() => {
                    setSatate({
                        ...state,
                        counter1: counter1 + 1,
                    });
                }}
            >
                +1
            </button>
        </div>
    );
};

export default CounterApp;
