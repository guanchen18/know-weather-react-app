import React, { Component } from 'react';
import dateformat from 'dateformat';
import temperature from './Temperature.module.css';
import date from './Date.module.css';
import description from './Description.module.css';
import Icon from '../elements/Icons/Icon';

const today = new Date();

class Weather extends Component {

    render () {
        const show = this.props.show;
        // console.log(show)
        if (show === true) {
            return (
                <div >
                    <div>
                        <span>{this.props.city} {this.props.country}</span>
                    </div> 

                    <div>
                        <Icon type={this.props.description} /> 
                    </div>

                    <div className={temperature.TemperatureWrapper}>
                        <span>{Math.round(this.props.temperature)}</span><span className={temperature.TemperatureSymbol}>°</span>
                    </div>  

                    <div className={description.DescriptionWrapper}>
                        {this.props.description}
                    </div>

                    <div className={date.DateWrapper}><span>{dateformat(today, "dddd, mmmm dd")} </span></div>

                </div>

            )
        } else {return <p></p>}
    }
}

export default Weather;