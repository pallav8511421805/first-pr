import React, { Component } from 'react';

function Loading(Component) {
    return function withload(){
        if(Component.isload){
            <h2>LOADING....</h2>
        } else{
            <Component isdata = {Edata} />
        }
    }
}

export default Loading;