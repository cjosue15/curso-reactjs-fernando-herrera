import React from 'react';

const ShowIncremet = React.memo(({ increment }) => {
    console.log('Me volvi a generar');

    return (
        <button onClick={() => increment(5)} className='btn btn-info'>
            Incrementar
        </button>
    );
});

export default ShowIncremet;
