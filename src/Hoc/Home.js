import React from 'react';

function Home({data}) {
    return (
        <div>
            {
                data.map((d,i)=>{
                   return(
                    <div key={i}>
                    <div style={{display:"flex",flexWrap:"wrap",color:"crimson",fontWeight:"bold",fontSize:"24px"}}><p>{d.id+" "+d.name}</p></div>
                    </div>
                   )
                })
            }
        </div>
    );
}

export default Home;