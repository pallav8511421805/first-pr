import React, { useState } from 'react';

function Cityfun(props) {
    const [cityname,setciyname] = useState("Amadabad");
    const Changecity = () =>{
        setciyname("Bavnagar");
    }
    return (
        <div>
            <h1>function based components</h1>
            <p>{cityname}</p>
            <button onClick={()=>Changecity()}>Change city</button>
        </div>
    );
}

export default Cityfun;