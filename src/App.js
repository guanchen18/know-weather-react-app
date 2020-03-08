import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Weather from './components/Weather/Weather';

class App extends Component {
  state = {
    searchBarInput: '',
    temperature: null,
    city: '',
    humidity: null,
    description: 'Clear',
    error: null,
    show: false
  }

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const response = await api_call.json();
    console.log(response);
    if(response['message'] !== "city not found"){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].main,
        error: null,
      })
    } else {
      console.log("City not found")
      this.setState({
        error: "City not found"
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
          country = {this.state.country}
          error = {this.state.error}
          temperature = {this.state.temperature}
          description = {this.state.description}
          type = {this.state.description}
          show = {this.state.show}
        />
      </div>  
    )
  }
}

export default App;

