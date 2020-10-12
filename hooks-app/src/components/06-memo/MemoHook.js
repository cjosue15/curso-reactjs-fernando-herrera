import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/ProcesoPesado';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/useEffect.css';

const MemoHook = () => {
    const { state: counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>
                Counter: <small> {counter} </small>
            </h3>
            <hr />
            {/* <p>{procesoPesado(counter)}</p> */}
            <p>{memoProcesoPesado}</p>
            <button className='btn btn-info' onClick={() => increment(1)}>
                Increment
            </button>
            <button className='btn btn-warning ml-3' onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    );
};

export default MemoHook;
