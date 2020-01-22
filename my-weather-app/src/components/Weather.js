import React, { Component } from 'react';

class Weather extends Component {
    render () {
        return (
            <div>
                <span>{this.props.city}, {this.props.country}</span>
                <span>{this.props.temperature}</span>


            </div>
        )
    }
}

export default Weather;