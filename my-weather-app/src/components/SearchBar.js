import React, { Component } from 'react';

class SearchBar extends Component {

    render (){
        return (
            <form>
                <input type="text" name="city" placeholder="city name"></input>
                <input type="text" name="country" placeholder="country name"></input>
                <button>SET</button>
            </form>
        )
    }
}

export default SearchBar;