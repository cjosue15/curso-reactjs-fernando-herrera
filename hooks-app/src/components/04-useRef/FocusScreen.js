import React, { useRef } from 'react';
import '../02-useEffect/useEffect.css';

const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        console.log(inputRef);
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>Focus Screen </h1>
            <hr />
            <input className='form-control' placeholder='Su nombre' ref={inputRef} />
            <button className='btn btn-info mt-5' onClick={handleClick}>
                Focus
            </button>
        </div>
    );
};

export default FocusScreen;
