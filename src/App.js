import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Weather from './components/Weather/Weather';

class App extends Component {
  state = {
    city: '',
    description: 'Clear',
    error: null,
    searchBarInput: '',
    show: false,
    temperature: null,
    weatherIconID: null
  }

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const response = await api_call.json();
    console.log(response)
    if (response['cod'] !== 200) {
      this.setState({
        error: response['message']
      })
    }
    else{
      this.setState({
        city: response.name,
        description: response.weather[0].main,
        error: null,
        temperature: response.main.temp,
        weatherIconID: response.weather[0].icon
      })
    }
  }
  searchBarHandler = (e) => {
    this.setState({
      searchBarInput: e.target.value
    })
  }
  showUpdate = () => {
    this.setState({
      show: true
    })
  }

  render(){
    return (
      <div>
        <SearchBar handleClick={this.getWeather} showUpdate={this.showUpdate}/>
        <Weather 
          city = {this.state.city}
          error = {this.state.error}
          temperature = {this.state.temperature}
          description = {this.state.description}
          type = {this.state.description}
          show = {this.state.show}
          iconID = {this.state.weatherIconID}
        />
      </div>  
    )
  }
}

export default App;

