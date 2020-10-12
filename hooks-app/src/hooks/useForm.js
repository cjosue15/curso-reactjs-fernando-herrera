import { useState } from 'react';

const useForm = (inicialState = {}) => {
    const [state, setState] = useState(inicialState);

    const handleInputChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value,
        });
    };

    return [state, handleInputChange];
};

export default useForm;
