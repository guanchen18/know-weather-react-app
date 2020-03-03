import React from 'react';

import searchbar from './SearchBar.module.css';
import inputfield from '../elements/InputField.module.css';
import button from '../elements/Button.module.css';

function SearchBar(props) {
    return (
        <div className={searchbar.SearchBarWrapper}>
            <form onSubmit={props.handleClick}> 
                <div className={inputfield.InputFieldWrapper} >
                    <label type="text">Location</label>
                    <input type="text" name="city" placeholder="Enter a city" onChange={props.searchBarHandler}></input>
                    {/* <input type="text" name="country" placeholder="Enter a country"></input> */}
                    <button className={button.ButtonWrapper} position="onForm" name="searchSubmit" type="submit" onClick={props.showUpdate}>SET</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
