import React, { Component } from 'react';

class City extends Component {
    constructor(props){
        super(props);
         
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
                <p>{this.state.cityname} {this.props.id}</p>
                <button onClick={() => this.changecity()}>Change city</button>
            </div>
        );
    }
}

export default City;