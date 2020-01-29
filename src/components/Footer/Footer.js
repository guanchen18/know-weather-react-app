import React from 'react';

import classes from './Footer.module.css';
import Logo from '../../elements/Logo/Logo';

const footer = (props) => {
    return(
        <footer className={classes.Footer} style={{backgroundColor: props.color}}>
           <p>Copy right Guanchen Song 2020</p>
        </footer>
        
    ); 
}

export default footer;