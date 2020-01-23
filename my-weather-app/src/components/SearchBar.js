import React, { Component } from 'react';
import searchbar from './SearchBar.module.css';
import inputfield from '../elements/InputField.module.css';


class SearchBar extends Component {
    render (){
        return (
            <div className={searchbar.SearchBarWrapper}>
                <form onSubmit={this.props.handleClick}> 
                    <div className={inputfield.InputFieldWrapper} >
                        <label type="text">Location</label>
                        <input type="text" name="city" placeholder="Enter a city" onChange={this.props.searchBarHandler}></input>
                        <input type="text" name="country" placeholder="Enter a country"></input>
                        <button position="onForm" name="searchSubmit" type="submit" onClick={this.props.showUpdate}>SET</button>
                    </div>
                </form>
             
            </div>
        )
        
    }
}

export default SearchBar;