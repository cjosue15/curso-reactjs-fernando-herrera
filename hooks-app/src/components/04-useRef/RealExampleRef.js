import React, { useState } from 'react';
import '../02-useEffect/useEffect.css';
import MultipleCustomHokks from '../03-examples/MultipleCustomHokks';

const RealExampleRef = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />

            {show && <MultipleCustomHokks />}

            <button className='btn btn-primary mt-5' onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'}
            </button>
        </div>
    );
};

export default RealExampleRef;
