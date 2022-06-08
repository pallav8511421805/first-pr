import React from 'react';

function Home({data}) {
    return (
        <div>
            {
                data.map((d,i)=>{
                   return(
                    <div key={i}>
                    <h3>{d.id}</h3>
                    <h2>{d.name}</h2>
                    </div>
                   )
                })
            }
        </div>
    );
}

export default Home;