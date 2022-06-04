import React, { Component } from 'react';

class Contry extends Component {
    constructor(){
        super();

        this.state = {
            countryname : "India"
        }
    }

    change = () =>{
        this.setState({
            countryname : "London"
        });
    };


    render() {
        return (
            <div>
                <h1>country name</h1>
                <p>{this.state.countryname}</p>
                <button onClick={() => this.change()}>changecountry</button>
            </div>
        );
    }
}

export default Contry;