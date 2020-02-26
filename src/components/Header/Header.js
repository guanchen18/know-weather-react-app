import React from 'react';

import classes from './Header.module.css';
import Logo from '../../elements/Logo/Logo';

const header = (props) => {
    return(
        <header className={classes.Header} style={{backgroundColor: props.color}}>
            {/* <Logo colorScheme={'light'} clicked={props.onClickHandler} /> */}
            <p className={classes.Logo}>hello weather</p>
        </header>
    ); 
}

export default header;
