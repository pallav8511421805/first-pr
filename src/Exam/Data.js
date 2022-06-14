import React from 'react';

function Data({data}) {
    let Efilter = data.filter((ed, inx) => ed.salary > 25000); 
    return (
        <>
        <h1 align="center">Employee data</h1>
        <table border="1px" width="750px" align="center" cellSpacing="0" cellPadding="0"> 
         <tr> 
           <th>NAME</th> 
           <th>ID</th> 
           <th>SALARY</th> 
           <th>JOINING-DATE</th> 
         </tr> 
         { 
           Efilter.map((d, i) => { 
             return ( 
               <tr key={i}> 
                 <td align="center">{d.name}</td> 
                 <td align="center">{d.id}</td> 
                 <td align="center">{d.salary}</td> 
                 <td align="center">{d.joining_date}</td> 
               </tr> 
             ) 
           }) 
         } 
       </table>
       </> 
    );
}

export default Data;