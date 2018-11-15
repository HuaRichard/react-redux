import React from 'react';

const Counter = (props) => {
    const { value, onIncrement, onDecrement } = props;
    return <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
};


export default Counter;