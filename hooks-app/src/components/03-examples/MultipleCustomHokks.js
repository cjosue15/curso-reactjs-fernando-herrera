import React from 'react';
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/useEffect.css';

const MultipleCustomHokks = () => {
    const { state: counter, increment } = useCounter(1);

    const { loading, data, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data;

    // const handleCounter = () => {};

    if (error) {
        return <h1>Error</h1>;
    }

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {loading ? (
                <div className='alert alert-info text-center'>Loading...</div>
            ) : (
                <blockquote className='blockquote text-right'>
                    <p className='mb-0'>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                </blockquote>
            )}

            {!loading && (
                <button className='btn btn-info' onClick={() => increment(1)}>
                    Next Quote
                </button>
            )}
        </div>
    );
};

export default MultipleCustomHokks;
