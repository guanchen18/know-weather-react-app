import React, { Component } from 'react';

class SearchBar extends Component {

    render (){
        return (
            <form onSubmit={this.props.handleClick}> 
                <input type="text" name="city" placeholder="city name"></input>
                <input type="text" name="country" placeholder="country name"></input>
                {/* <p>{this.props}</p> */}
                <button>SET</button>
            </form>
        )
    }
}

export default SearchBar;