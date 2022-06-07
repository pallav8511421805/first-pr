import React, { useState } from 'react';

function Counter(props) {
    const [counter, setcounter] = useState(0);
    const plus = () => {
        setcounter(counter + 1);
    }
    const minus = () => {
        setcounter(counter - 1);
    }
    return (
        <div>
            <h1 style={{ display: "flex", justifyContent: "center" }}>{"counter = " + counter}</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button style={{ color: "white", background: "green", border: "none", width: "120px", height: "35px", display: "block", borderRadius: "5px", margin: "15px" }} onClick={() => plus()}>Increment</button>
                <button style={{ color: "white", background: "red", border: "none", width: "120px", height: "35px", display: "block", borderRadius: "5px", margin: "15px" }} onClick={() => minus()}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter;