import React, { useLayoutEffect, useRef } from 'react';
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './Layout.css';

const LayoutEffect = () => {
    const { state: counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data;

    const parrafo = useRef();

    useLayoutEffect(() => {
        const { width } = parrafo.current.getBoundingClientRect();
        console.log(width);
    }, [quote]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
            <blockquote className='blockquote text-right'>
                <p className='mb-0' ref={parrafo}>
                    {quote}
                </p>
            </blockquote>

            <button className='btn btn-info' onClick={() => increment(1)}>
                Next Quote
            </button>
        </div>
    );
};

export default LayoutEffect;
