import React, { Component } from 'react';

class Contry extends Component {
    constructor(){
        super();

        this.state = {
            countryname : "India",
            countryname1 : "Taj mahal"
        }
    }

    change = () =>{
        this.setState({
            countryname : "United States of America",
            countryname1 : "Statue of liberty"
        });
    };


    render() {
        return (
            <div>
                <h1>country name</h1>
                <p>{this.state.countryname}{"  ( "+this.state.countryname1 +" )"}</p>
                <button onClick={() => this.change()}>changecountry</button>
            </div>
        );
    }
}

export default Contry;