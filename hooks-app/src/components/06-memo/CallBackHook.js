import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/useEffect.css';
import ShowIncremet from './ShowIncremet';

const CallBackHook = () => {
    const [counter, setCounter] = useState(0);

    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    const increment = useCallback(
        (num) => {
            setCounter((counter) => counter + num);
        },
        [setCounter]
    );

    useEffect(() => {
        /* */
    }, [setCounter]);

    return (
        <div>
            <h1>CallBackHook: {counter}</h1>
            <hr />
            <ShowIncremet increment={increment} />
        </div>
    );
};

export default CallBackHook;
