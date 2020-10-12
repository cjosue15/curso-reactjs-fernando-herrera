import React, { useEffect, useState } from 'react';

export const Message = () => {
    const [cords, setCords] = useState({ x: 0, y: 0 });

    const { x, y } = cords;

    useEffect(() => {
        // let idInterval = setInterval(() => {
        //     console.log('Hola');
        // }, 100);

        const mouseMove = (e) => {
            const cords = { x: e.x, y: e.y };
            // setCords({
            //     x: cords.x,
            //     y: cords.y,
            // });
            setCords(cords);
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('Componente Desmontando');
            // clearInterval(idInterval);
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <div>
            <h3>Eres genail</h3>
            <p>x {x}</p>
            <p>y {y}</p>
        </div>
    );
};
