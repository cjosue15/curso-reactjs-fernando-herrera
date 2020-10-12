import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './useEffect.css';

const SimpleForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '' });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('Hey');
    }, []);

    useEffect(() => {
        // console.log('formState cambio');
    }, [formState]);

    useEffect(() => {
        // console.log('email cambio');
    }, [email]);

    const handleInputChange = ({ target }) => {
        const { value, name } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div>
            <h1>useEffect</h1>
            <hr />
            <div className='form-group'>
                <input
                    className='form-control'
                    type='text'
                    name='name'
                    placeholder='Tu Nombre'
                    autoComplete='off'
                    onChange={handleInputChange}
                    value={name}
                />
            </div>
            <div className='form-group'>
                <input
                    className='form-control'
                    type='email'
                    name='email'
                    placeholder='email@example.com'
                    autoComplete='off'
                    onChange={handleInputChange}
                    value={email}
                />
            </div>

            {name === '123' && <Message />}
        </div>
    );
};

export default SimpleForm;
