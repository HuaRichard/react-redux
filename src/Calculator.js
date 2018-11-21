import React, { useContext, useReducer } from 'react';
import { Count } from './App';
import {reducer} from './Reducer';


const calculate = (state, action) => {
    switch(action.type) {
        case 'ADD': return {...state, count: (state.count + state.number)};
        case 'MTPLY': return {...state, count: (state.count * state.number)};
        case 'SET': return {...state, number: Number(action.input)};
        default: return state;
    }
}

const Calculator = () => {
    const [state, dispatch] = useReducer(
        calculate, 
        {
            count: 0, 
            number: 0,
        }
    )
    
    return (
        <Count.Provider value={state.count}>
            <p>{state.count}</p>
            <br />
            <input placeholder='number' onChange={e => dispatch({type: 'SET', input: e.target.value})} />
            <button onClick={() => dispatch({type: 'MTPLY'})}>*</button>
            <button onClick={() => dispatch({type: 'ADD'})}>+</button>
        </Count.Provider>
    )
}

export { Calculator };