import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
           time : new Date()
        }
    }

    componentDidMount = ()=>{
        
    } 
    
    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;