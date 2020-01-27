import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



class App extends Component {
  state = {
    searchBarInput: '',
    temperature: null,
    city: '',
    country: '',
    humidity: null,
    description: 'Clear',
    error: null,
    show: false
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
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].main,
        error: "",
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
      <Header />
        <SearchBar handleClick={this.getWeather} showUpdate={this.showUpdate}/>
        <Weather 
          city = {this.state.city}
          country = {this.state.country}
          temperature = {this.state.temperature}
          description = {this.state.description}
          type = {this.state.description}
          show = {this.state.show}
          />
      <Footer />
      </div>  
    )
  }
}

export default App;

