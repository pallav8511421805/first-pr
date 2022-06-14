import React from 'react';

function Data(props) {
    return (
        <table>
        {
            
            Edata.map((d,i)=>{
                <>
             <tr key={i}>
             <td>{d.id}</td>
             <td>{d.name}</td>
             <td>{d.joining_date}</td>
             <td>{d.salary}</td>
             </tr>
             </>
            })
        }
        </table>
    );
}

export default Data;