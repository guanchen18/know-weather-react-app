import React, { Component } from 'react';
import dateformat from 'dateformat';
const today = new Date();

class Weather extends Component {

    render () {
        return (
            <div>
                <p>
                    <span>{this.props.city}, {this.props.country}</span>
                </p> 
                <p>
                    <span>{this.props.temperature}</span>
                </p>   
                <p>
                    <span>{this.props.description}</span>
                </p>

                <p><span>{dateformat(today, "dddd, mmmm dd")} </span></p>

            </div>
        )
    }
}

export default Weather;