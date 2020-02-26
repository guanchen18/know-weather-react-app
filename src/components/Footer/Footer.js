import React from 'react';

import classes from './Footer.module.css';
import Logo from '../../elements/Logo/Logo';

const footer = (props) => {
    return(
        <footer className={classes.Footer} style={{backgroundColor: props.color}}>
            {/* <Logo colorScheme={'light'} clicked={props.onClickHandler} /> */}
            <p className={classes.Logo}>Get to know weather of your city</p>
        </footer>
        
    ); 
}

export default footer;
