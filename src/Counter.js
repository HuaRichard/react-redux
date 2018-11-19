import React, { useReducer } from 'react';
import { reducer } from './Reducer';

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
            <br />
            <button onClick={() => dispatch({type: 'ADD'})}>+</button>
            <button onClick={() => dispatch({type: 'MINUS'})}>-</button>
        </div>
    )
}

export {Counter};