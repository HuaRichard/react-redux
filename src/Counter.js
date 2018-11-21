import React, { useReducer, useContext } from 'react';
import { reducer } from './Reducer';
import { Count } from './App';

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count: useContext(Count)});
    return (
        <div>
            <p>{useContext(Count)}</p>
            <p>{state.count}</p>
            <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
            <br />
            <button onClick={() => dispatch({type: 'ADD'})}>+</button>
            <button onClick={() => dispatch({type: 'MINUS'})}>-</button>
            <Count.Provider value={10}>
            </Count.Provider>
        </div>
    )
}

export {Counter};