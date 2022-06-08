import React from 'react';

function Loading(Component) {
    return function withloadcomponent({isloading,data}){
        if(isloading){
            return (
                <h1>Loading .....</h1>
            )
        } else{
            return (
               <Component data={data}/>
            )
        }
    }
}

export default Loading;