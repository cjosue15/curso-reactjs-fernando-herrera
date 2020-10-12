import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/useEffect.css';
import Small from './Small';

const Memorize = () => {
    const { state: counter, increment } = useCounter(1);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>
                Counter: <Small value={counter} />
            </h1>
            <hr />
            <button className='btn btn-info' onClick={() => increment(1)}>
                Increment
            </button>
            <button className='btn btn-warning ml-3' onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    );
};

export default Memorize;
