import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo = 'soy subtitulo' }) => {
    // const mundo = 'Hola Mundo';

    return (
        <div className='container'>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </div>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
};

export default PrimeraApp;
