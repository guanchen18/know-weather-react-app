import React, { Component } from 'react';

import searchbar from './SearchBar.module.css';
import button from './Button.module.css';

class SearchBar extends Component {
  componentDidMount() {
    var places = require('places.js');
    var placesAutocomplete = places({
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      container: document.querySelector('#city')
    });
  }

  render(){
    return (
      <div className={searchbar.SearchBarWrapper}>
        <form onSubmit={this.props.handleClick}>
          <input type="search" id="city" placeholder="Your city name" />
          <button className={button.ButtonWrapper} position="onForm" name="searchSubmit" type="submit" onClick={this.props.showUpdate}> SEARCH </button>
        </form>
      </div>
    )
  }
}

export default SearchBar;
