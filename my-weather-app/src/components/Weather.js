import React, { Component } from 'react';
import dateformat from 'dateformat';
import weather from './Weather.module.css';
import temperature from './Temperature.module.css';
import date from './Date.module.css';
import description from './Description.module.css';
import Icon from '../elements/Icons/Icon';
import location from './Location.module.css';

const today = new Date();

class Weather extends Component {

    render () {
        const show = this.props.show;
        // console.log(show)
        if (show === true) {
            return (
                <div className={weather.WeatherDetailsWrappe}>

                    <div>
                        <Icon type={this.props.description} /> 
                    </div>

                    <div className={weather.WeatherDataWrapper}>

                    <div className={temperature.TemperatureWrapper}>
                        <span>{Math.round(this.props.temperature)}</span><span className={temperature.TemperatureSymbol}>°</span>
                    </div>  

                    <div className={description.DescriptionWrapper}>
                        {this.props.description}
                    </div>

                    <div className={date.DateWrapper}><span>{dateformat(today, "dddd, mmmm dd")} </span></div>
                    
                    <div className={location.LocationWrapper}>
                        <span>{this.props.city} {this.props.country}</span>
                    </div> 
                    </div>

                </div>

            )
        } else {return <p></p>}
    }
}

export default Weather;