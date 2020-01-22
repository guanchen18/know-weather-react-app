import React, { Component } from 'react';
import SearchBar from './components/SearchBar';


class App extends Component {
  state = {
    temperature: null,
    city: '',
    country: '',
    humidity: null,
    description: null,
    error: null
  }
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    // const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: "Please put correct names:("
      })
    }
  }
  render(){
    return (
      <div>
        <h1>Hello, world!</h1>
        <SearchBar handleClick={this.getWeather}/>
      </div>
    )
  }
}

export default App;

