import React from 'react';
import useForm from '../../hooks/useForm';
import './useEffect.css';

const FormWithCustomHook = () => {
    const [state, handleInputChange] = useForm({ name: '', email: '', password: '' });

    const { name, email, password } = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <div className='form-group'>
                <input
                    className='form-control'
                    type='password'
                    name='password'
                    placeholder='******'
                    onChange={handleInputChange}
                    value={password}
                />
            </div>
            <button type='submit' className='btn btn-info'>
                Enviar
            </button>
        </form>
    );
};

export default FormWithCustomHook;
