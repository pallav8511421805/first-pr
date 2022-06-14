import React from 'react';

function Data({data}) {
    return (
        <table border="1px" width="750px" align="center" cellSpacing="0" cellPadding="0"> 
         <tr> 
           <th>NAME</th> 
           <th>ID</th> 
           <th>SALARY</th> 
           <th>JOINING-DATE</th> 
         </tr> 
         { 
           data.map((data2, i2) => { 
             return ( 
               <tr key={i2}> 
                 <td align="center">{data2.name}</td> 
                 <td align="center">{data2.id}</td> 
                 <td align="center">{data2.salary}</td> 
                 <td align="center">{data2.joining_date}</td> 
               </tr> 
             ) 
           }) 
         } 
       </table> 
    );
}

export default Data;