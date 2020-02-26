import React from 'react';

import classes from './Footer.module.css';
import Logo from '../../elements/Logo/Logo';

const footer = (props) => {
    return(
        <footer className={classes.Footer} style={{backgroundColor: props.color}}>
            <Logo colorScheme={'light'} clicked={props.onClickHandler} />
        </footer>
        
    ); 
}

export default footer;