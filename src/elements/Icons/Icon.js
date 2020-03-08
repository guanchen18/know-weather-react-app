import React from 'react';

import classes from './Icon.module.css';

const Icon = (props) => {
    return(
        <img 
            src={props.src}
            alt={props.description}
            className={classes.Icon} />
    );
}

export default Icon;
