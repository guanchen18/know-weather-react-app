import React from 'react';
import dateformat from 'dateformat';

import Icon from '../../elements/Icons/Icon';

import date from './Date.module.css';
import description from './Description.module.css';
import location from './Location.module.css';
import temperature from './Temperature.module.css';
import weather from './Weather.module.css';

function Weather(props) {
    const today = new Date();
    if (props.show === true) {
        if (props.error === null) {
            return (
                <div className={weather.WeatherDetailsWrappe}>

                    <div>
                        <Icon type={props.description} /> 
                    </div>

                    <div className={weather.WeatherDataWrapper}>

                        <div className={temperature.TemperatureWrapper}>
                            <span>{Math.round(props.temperature)}</span><span className={temperature.TemperatureSymbol}>°</span>
                        </div>  

                        <div className={description.DescriptionWrapper}>
                            {props.description}
                        </div>

                        <div className={date.DateWrapper}><span>{dateformat(today, "dddd, mmmm dd")} </span></div>
                        
                        <div className={location.LocationWrapper}>
                            <span>{props.city} {props.country}</span>
                        </div> 
                    </div>

                </div>
            )
        }
        else {
            return(
                <div className="error">
                    {props.error}
                </div>
            )
        }
    }
    else {
        return <p></p>
    }
}

export default Weather;
