import React from 'react';

function Counter(props) {
    return (
        <div>
            <p></p>
            <div style={{display:"flex",justifyContent:"center"}}>
            <button style={{color:"white",background:"red",border:"none",width:"120px",height:"35px",display:"block",borderRadius:"5px",margin:"15px"}}>Decrement</button>
            <button style={{color:"white",background:"green",border:"none",width:"120px",height:"35px",display:"block",borderRadius:"5px",margin:"15px"}}>Increment</button>
            </div>
        </div>
    );
}

export default Counter;