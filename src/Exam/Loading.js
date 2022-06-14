import React, { Component } from 'react';

function Loading(Component) {
    return function withload({isload,data}){
        if(isload){
            return(
                <h2>LOADING....</h2>
            )
        } else{
            return(
                <Component data = {Edata} />
            )
            
        }
    }
}

export default Loading;