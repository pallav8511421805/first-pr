import React, { useState } from 'react';

function Countryfun(props) {
    const [countryname, setcountryname] = useState("India");

     const change = () =>{
         setcountryname("London");
     }
    return (
        <div>
        <h1>Contry name</h1>
        <p>{countryname}</p>
        <button  onClick={() => change()}>Change country</button>       
        </div>
    );
}

export default Countryfun;