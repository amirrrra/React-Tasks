import React, { useState } from 'react';

function CounterFun(props) {
    const [counter, setCounter] = useState(0);

        return (
            <>
                <h1>Function Counter: {counter}</h1>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
                <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            </>
        );
    }
    
    export default CounterFun;