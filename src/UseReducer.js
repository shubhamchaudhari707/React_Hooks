import React, { useReducer, useState } from 'react';

let initiaState = 0
const reducer = (state, action) => {
    // console.log(state, action)
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    else if (action.type === "DECREMENT") {
        return state - 1;
    }
    return state;
}

const UseReducer = () => {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initiaState);

    return (
        <>
            <h2>{state}</h2>
            <button onClick={(() => dispatch({ type: "INCREMENT" }))}>+</button>
            <button onClick={(() => dispatch({ type: "DECREMENT" }))}>-</button>
        </>
    )
}

export default UseReducer