import React from 'react';

const Small = React.memo(({ value }) => {
    console.log('Me llamas');

    return <small>{value}</small>;
});

export default Small;
