import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CounterApp({ value }) {
    const [counter, setCounter] = useState(value);

    const handleClick = (e) => {
        setCounter(counter + 1);
    };

    const handleDisminuir = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <React.Fragment>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={(event) => handleClick(event)}>Aumentar</button>
            <button onClick={() => setCounter(value)}>Resetear</button>
            <button onClick={handleDisminuir}>Disminuir</button>
        </React.Fragment>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

export default CounterApp;
