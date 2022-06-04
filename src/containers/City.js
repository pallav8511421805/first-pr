import React, { Component } from 'react';

class City extends Component {
    constructor(){
        super();
         
        this.state =  {
         cityname : "surat"
        }
    }
    
   changecity = () =>{
      this.setState({
        cityname : "Mumbai"
      });
    };

    render() {
        return (
            <div>
                <h1>class based components</h1>
                <p>{this.state.cityname}</p>
                <button onClick={() => this.changecity()}>Change city</button>
            </div>
        );
    }
}

export default City;